/* eslint-disable import/no-unresolved */
import React, { useCallback, useState } from 'react';
import CalendarIcon from '@assets/calendar.svg?react';
import { useForm } from 'react-hook-form';

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
} from './styles';
import { DateFilterData, dateFilterResolver } from './dateFilter.zod';
import Input from './Input';

const DateInput: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState(true);
  const [, setInitialDate] = useState('');

  const {
    handleSubmit,
    register,

    formState: { errors },
  } = useForm<DateFilterData>({
    resolver: dateFilterResolver,
    mode: 'all',
  });

  const onSubmit = useCallback(async (data: DateFilterData) => {
    setInitialDate(`${data.year}/${data.month}/${data.day}`);
  }, []);

  return (
    <Container>
      <DateSelector
        selected={selectedItem}
        onClick={() => setSelectedItem(true)}
      >
        <CalendarIcon />
        <p>Start</p>
        <DateInputBox selected={false}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup>
              <InputLabel>Year</InputLabel>
              <FormControl isInvalid={!!errors.year}>
                <Input
                  register={register}
                  name="year"
                  type="number"
                  errors={errors.year}
                  variety
                />
              </FormControl>
            </InputGroup>
            <DateDivider>/</DateDivider>
            <InputGroup>
              <InputLabel>Month</InputLabel>
              <FormControl isInvalid={!!errors.month}>
                <Input
                  name="month"
                  type="number"
                  register={register}
                  errors={errors.month}
                />
              </FormControl>
            </InputGroup>
            <DateDivider>/</DateDivider>

            <InputGroup>
              <InputLabel>Day</InputLabel>
              <FormControl isInvalid={!!errors.day}>
                <Input
                  name="day"
                  type="number"
                  register={register}
                  errors={errors.day}
                />
              </FormControl>
            </InputGroup>
            <SubmitButton type="submit">Ok →</SubmitButton>
          </Form>
        </DateInputBox>
      </DateSelector>

      <DateSelector
        selected={!selectedItem}
        onClick={() => setSelectedItem(false)}
      >
        <CalendarIcon />
        <p> End </p>
        {/* <DateInputContainer>
          <Input value="2023" />
          <Input value="04" />
          <Input value="04" />
          <SubmitButton>Ok</SubmitButton>
        </DateInputContainer> */}
      </DateSelector>
    </Container>
  );
};

export default DateInput;
