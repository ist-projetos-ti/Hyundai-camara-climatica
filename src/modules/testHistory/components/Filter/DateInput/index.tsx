/* eslint-disable import/no-unresolved */
import React, { useCallback, useEffect, useState } from 'react';
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
  IconContainer,
} from './styles';
import {
  DateFilterData,
  dateFilterResolver,
} from '../../../schemas/dateFilter.zod';
import Input from '../../Input';

interface DateInputProps {
  onChange: (...event: any[]) => void;
}

interface IValue {
  initialDate: Date | undefined;
  finalDate: Date | undefined;
}

const DateInput: React.FC<DateInputProps> = ({ onChange }) => {
  const [isStartDateSelected, setIsStartDateSelected] = useState(true);
  const [initialDate, setInitialDate] = useState<string | null>(null);
  const [finalDate, setFinalDate] = useState<string | null>(null);

  const [showInitialDateBox, setShowInitialDateBox] = useState(false);
  const [showFinalDateBox, setShowFinalDateBox] = useState(false);
  const [showError, setShowError] = useState<string | null>(null);

  const [value, setValue] = useState<IValue>({} as IValue);

  useEffect(() => {
    if (initialDate || finalDate) {
      setValue({
        initialDate: initialDate ? new Date(initialDate) : undefined,
        finalDate: finalDate ? new Date(finalDate) : undefined,
      });
    }
  }, [finalDate, initialDate]);

  useEffect(() => {
    onChange(value);
  }, [onChange, value]);

  const {
    handleSubmit: handleInitialDateSubmit,
    register: initialDateRegister,
    clearErrors: initialDateClearErrors,
    setFocus: initialDateSetFocus,
    setValue: initialDateSetValue,
    formState: { errors: initialDateErrors },
  } = useForm<DateFilterData>({
    resolver: dateFilterResolver,
    mode: 'all',
  });

  const {
    handleSubmit: handleFinalDateSubmit,
    register: finalDateRegister,
    clearErrors: finalDateClearErrors,
    setFocus: finalDateSetFocus,
    setValue: finalDateSetValue,

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
          type="button"
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
          <Form>
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
                  nextInput="month"
                  setFocus={initialDateSetFocus}
                  setValue={initialDateSetValue}
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
                  nextInput="day"
                  setFocus={initialDateSetFocus}
                  setValue={initialDateSetValue}
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
                  setValue={initialDateSetValue}
                  inputWidth="date"
                />
              </FormControl>
            </InputGroup>
            <SubmitButton
              type="button"
              onClick={handleInitialDateSubmit(onInitialDateSubmit)}
            >
              Ok →
            </SubmitButton>
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
          type="button"
        >
          <IconContainer>
            <CalendarIcon />
          </IconContainer>
          {finalDate ? <DateLabel> {finalDate}</DateLabel> : <p>End</p>}
        </Button>

        <DateInputBox selected={showFinalDateBox}>
          <Form>
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
                  nextInput="month"
                  setFocus={finalDateSetFocus}
                  setValue={finalDateSetValue}
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
                  nextInput="day"
                  setFocus={finalDateSetFocus}
                  setValue={finalDateSetValue}
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
                  setValue={finalDateSetValue}
                  inputWidth="date"
                />
              </FormControl>
            </InputGroup>
            <SubmitButton
              type="button"
              onClick={handleFinalDateSubmit(onFinalDateSubmit)}
            >
              Ok →
            </SubmitButton>
          </Form>
          {!!showError && (
            <ErrorMessage>
              <p>✖</p>
              <p>{showError}</p>
            </ErrorMessage>
          )}
        </DateInputBox>
      </DateSelector>
    </Container>
  );
};

export default DateInput;
