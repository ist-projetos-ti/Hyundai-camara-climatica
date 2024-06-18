/* eslint-disable import/no-unresolved */
import React, { useCallback, useState } from 'react';
import CalendarIcon from '@assets/calendar.svg?react';
import { useForm } from 'react-hook-form';
import { isAfter, isBefore } from 'date-fns';
import { FormControl } from '@chakra-ui/react';

import {
  Container,
  DateSelector,
  SubmitButton,
  DateInputBox,
  DateDivider,
  InputGroup,
  Form,
  InputLabel,
  DateLabel,
  Button,
  ErrorMessage,
} from './styles';
import { DateFilterData, dateFilterResolver } from './dateFilter.zod';
import Input from '../Input';

const DateInput: React.FC = () => {
  const [isStartDateSelected, setIsStartDateSelected] = useState(true);
  const [initialDate, setInitialDate] = useState<string | null>(null);
  const [finalDate, setFinalDate] = useState<string | null>(null);

  const [showInitialDateBox, setShowInitialDateBox] = useState(false);
  const [showFinalDateBox, setShowFinalDateBox] = useState(false);
  const [showError, setShowError] = useState<string | null>(null);

  const {
    handleSubmit: handleInitialDateSubmit,
    register: initialDateRegister,
    clearErrors: initialDateClearErrors,
    formState: { errors: initialDateErrors },
  } = useForm<DateFilterData>({
    resolver: dateFilterResolver,
    mode: 'all',
  });

  const {
    handleSubmit: handleFinalDateSubmit,
    register: finalDateRegister,
    clearErrors: finalDateClearErrors,
    formState: { errors: finalDateErrors },
  } = useForm<DateFilterData>({
    resolver: dateFilterResolver,
    mode: 'all',
  });

  const onInitialDateSubmit = useCallback(
    async (data: DateFilterData) => {
      if (
        finalDate &&
        isAfter(
          new Date(`${data.month}/${data.day}/${data.year}`),
          new Date(finalDate)
        )
      ) {
        setShowError('A data final deve ser maior que a data inicial.');
      } else {
        setShowError(null);
        setInitialDate(
          `${data.year} / ${data.month.toString().padStart(2, '0')} / ${data.day
            .toString()
            .padStart(2, '0')}`
        );
        if (JSON.stringify(initialDateErrors) === '{}')
          setShowInitialDateBox(false);
      }
    },
    [finalDate, initialDateErrors]
  );

  const onFinalDateSubmit = useCallback(
    async (data: DateFilterData) => {
      if (
        initialDate &&
        isBefore(
          new Date(`${data.month}/${data.day}/${data.year}`),
          new Date(initialDate)
        )
      ) {
        setShowError('A data final deve ser maior que a data inicial.');
      } else {
        setShowError(null);

        setFinalDate(
          `${data.year} / ${data.month.toString().padStart(2, '0')} / ${data.day
            .toString()
            .padStart(2, '0')}`
        );

        if (JSON.stringify(finalDateErrors) === '{}')
          setShowFinalDateBox(false);
      }
    },
    [finalDateErrors, initialDate]
  );

  return (
    <Container>
      <DateSelector selected={isStartDateSelected} filledDate={!!initialDate}>
        <Button
          onClick={() => {
            setShowInitialDateBox(!showInitialDateBox);
            setShowFinalDateBox(false);
            initialDateClearErrors();
            finalDateClearErrors();
            setIsStartDateSelected(true);
          }}
        >
          <CalendarIcon />
          {initialDate ? <DateLabel> {initialDate}</DateLabel> : <p>Start</p>}
        </Button>
        <DateInputBox selected={showInitialDateBox}>
          <Form onSubmit={handleInitialDateSubmit(onInitialDateSubmit)}>
            <InputGroup>
              <InputLabel>Year</InputLabel>
              <FormControl isInvalid={!!initialDateErrors.year}>
                <Input
                  register={initialDateRegister}
                  name="year"
                  type="text"
                  maxLength={4}
                  errors={initialDateErrors.year}
                  inputWidth="year"
                />
              </FormControl>
            </InputGroup>
            <DateDivider>/</DateDivider>
            <InputGroup>
              <InputLabel>Month</InputLabel>
              <FormControl isInvalid={!!initialDateErrors.month}>
                <Input
                  name="month"
                  type="text"
                  maxLength={2}
                  register={initialDateRegister}
                  errors={initialDateErrors.month}
                  inputWidth="date"
                />
              </FormControl>
            </InputGroup>
            <DateDivider>/</DateDivider>

            <InputGroup>
              <InputLabel>Day</InputLabel>
              <FormControl isInvalid={!!initialDateErrors.day}>
                <Input
                  name="day"
                  type="text"
                  maxLength={2}
                  register={initialDateRegister}
                  errors={finalDateErrors.day}
                  inputWidth="date"
                />
              </FormControl>
            </InputGroup>
            <SubmitButton type="submit">Ok →</SubmitButton>
          </Form>
        </DateInputBox>
      </DateSelector>

      {initialDate && finalDate && <DateDivider>{'>'}</DateDivider>}

      <DateSelector selected={!isStartDateSelected} filledDate={!!finalDate}>
        <Button
          onClick={() => {
            setShowFinalDateBox(!showFinalDateBox);
            setShowInitialDateBox(false);
            initialDateClearErrors();
            finalDateClearErrors();
            setIsStartDateSelected(false);
          }}
        >
          <CalendarIcon />
          {finalDate ? <DateLabel> {finalDate}</DateLabel> : <p>End</p>}
        </Button>

        <DateInputBox selected={showFinalDateBox}>
          <Form onSubmit={handleFinalDateSubmit(onFinalDateSubmit)}>
            <InputGroup>
              <InputLabel>Year</InputLabel>
              <FormControl isInvalid={!!finalDateErrors.year}>
                <Input
                  register={finalDateRegister}
                  name="year"
                  type="text"
                  maxLength={4}
                  errors={finalDateErrors.year}
                  inputWidth="year"
                />
              </FormControl>
            </InputGroup>
            <DateDivider>/</DateDivider>
            <InputGroup>
              <InputLabel>Month</InputLabel>
              <FormControl isInvalid={!!finalDateErrors.month}>
                <Input
                  name="month"
                  type="text"
                  maxLength={2}
                  register={finalDateRegister}
                  errors={finalDateErrors.month}
                  inputWidth="date"
                />
              </FormControl>
            </InputGroup>
            <DateDivider>/</DateDivider>

            <InputGroup>
              <InputLabel>Day</InputLabel>
              <FormControl isInvalid={!!finalDateErrors.day}>
                <Input
                  name="day"
                  type="text"
                  maxLength={2}
                  register={finalDateRegister}
                  errors={finalDateErrors.day}
                  inputWidth="date"
                />
              </FormControl>
            </InputGroup>
            <SubmitButton type="submit">Ok →</SubmitButton>
          </Form>
          {!!showError && <ErrorMessage>{showError}</ErrorMessage>}
        </DateInputBox>
      </DateSelector>
    </Container>
  );
};

export default DateInput;
