/* eslint-disable import/no-unresolved */
import React, { useCallback, useState } from 'react';
import CalendarIcon from '@assets/calendar.svg?react';
import { useForm } from 'react-hook-form';
import { isBefore } from 'date-fns';
import { FormControl } from '@chakra-ui/react';
// import Input from '@components/Form/Input';

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
} from './styles';
import { DateFilterData, dateFilterResolver } from './dateFilter.zod';
import Input from './Input';

const DateInput: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState(true);
  const [initialDate, setInitialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');

  const [showInitialDateBox, setShowInitialDateBox] = useState(false);
  const [showFinalDateBox, setShowFinalDateBox] = useState(false);

  const {
    handleSubmit: handleInitialDateSubmit,
    register: initialDateRegister,
    formState: { errors: initialDateErrors },
  } = useForm<DateFilterData>({
    resolver: dateFilterResolver,
    mode: 'all',
  });

  const {
    handleSubmit: handleFinalDateSubmit,
    register: finalDateRegister,
    setError,
    formState: { errors: finalDateErrors },
  } = useForm<DateFilterData>({
    resolver: dateFilterResolver,
    mode: 'all',
  });

  const onInitialDateSubmit = useCallback(
    async (data: DateFilterData) => {
      // .padStart()
      setInitialDate(
        `${data.year} / ${data.month.toString().padStart(2, '0')} / ${data.day
          .toString()
          .padStart(2, '0')}`
      );
      if (JSON.stringify(initialDateErrors) === '{}')
        setShowInitialDateBox(false);
    },
    [initialDateErrors]
  );

  const onFinalDateSubmit = useCallback(
    async (data: DateFilterData) => {
      console.log(
        isBefore(
          new Date(`${data.month}/${data.day}/${data.year}`),
          new Date(initialDate)
        )
      );

      if (
        isBefore(
          new Date(`${data.month}/${data.day}/${data.year}`),
          new Date(initialDate)
        )
      ) {
        setError('day', {
          type: 'manual',
          message: 'A data final deve ser maior que a data inicial',
        });
      } else {
        setFinalDate(
          `${data.year} / ${data.month.toString().padStart(2, '0')} / ${data.day
            .toString()
            .padStart(2, '0')}`
        );

        if (JSON.stringify(finalDateErrors) === '{}')
          setShowFinalDateBox(false);
      }
    },
    [finalDateErrors, initialDate, setError]
  );

  return (
    <Container>
      <DateSelector
        selected={selectedItem}
        onClick={() => setSelectedItem(true)}
        filledDate={!!initialDate}
      >
        <Button
          onClick={() => {
            setShowInitialDateBox(!showInitialDateBox);
            setShowFinalDateBox(false);
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
                  type="number"
                  errors={initialDateErrors.year}
                  variety
                />
              </FormControl>
            </InputGroup>
            <DateDivider>/</DateDivider>
            <InputGroup>
              <InputLabel>Month</InputLabel>
              <FormControl isInvalid={!!finalDateErrors.month}>
                <Input
                  name="month"
                  type="number"
                  register={initialDateRegister}
                  errors={finalDateErrors.month}
                />
              </FormControl>
            </InputGroup>
            <DateDivider>/</DateDivider>

            <InputGroup>
              <InputLabel>Day</InputLabel>
              <FormControl isInvalid={!!finalDateErrors.day}>
                <Input
                  name="day"
                  type="number"
                  register={initialDateRegister}
                  errors={finalDateErrors.day}
                />
              </FormControl>
            </InputGroup>
            <SubmitButton type="submit">Ok →</SubmitButton>
          </Form>
        </DateInputBox>
      </DateSelector>

      {initialDate && finalDate && <DateDivider>{'>'}</DateDivider>}

      <DateSelector
        selected={!selectedItem}
        onClick={() => setSelectedItem(false)}
        filledDate={!!finalDate}
      >
        <Button
          onClick={() => {
            setShowFinalDateBox(!showFinalDateBox);
            setShowInitialDateBox(false);
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
                  type="number"
                  errors={finalDateErrors.year}
                  variety
                />
              </FormControl>
            </InputGroup>
            <DateDivider>/</DateDivider>
            <InputGroup>
              <InputLabel>Month</InputLabel>
              <FormControl isInvalid={!!finalDateErrors.month}>
                <Input
                  name="month"
                  type="number"
                  register={finalDateRegister}
                  errors={finalDateErrors.month}
                />
              </FormControl>
            </InputGroup>
            <DateDivider>/</DateDivider>

            <InputGroup>
              <InputLabel>Day</InputLabel>
              <FormControl isInvalid={!!finalDateErrors.day}>
                <Input
                  name="day"
                  type="number"
                  register={finalDateRegister}
                  errors={finalDateErrors.day}
                />
              </FormControl>
            </InputGroup>
            <SubmitButton type="submit">Ok →</SubmitButton>
          </Form>
        </DateInputBox>
      </DateSelector>
    </Container>
  );
};

export default DateInput;
