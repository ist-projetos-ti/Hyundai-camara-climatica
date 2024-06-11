/* eslint-disable import/no-unresolved */
import React, { useCallback, useState } from 'react';
import CalendarIcon from '@assets/calendar.svg?react';
import { useForm } from 'react-hook-form';

import { FormControl } from '@chakra-ui/react';
import Input from '@components/Form/Input';
import {
  Container,
  DateSelector,
  SubmitButton,
  // InputLabel,
  // InputGroup,
  // DateDivider,
  DateInputBox,
  Form,
} from './styles';
import { DateFilterData, dateFilterResolver } from './dateFilter.zod';

const DateInput: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState(true);
  // const [monthValue, setMonthValue] = useState<number>();

  // const [dayValue, setDayValue] = useState<number>();

  const [, setInitialDate] = useState('');

  const {
    getFieldState,
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
            <FormControl isInvalid={!!errors.year}>
              <Input
                register={register}
                name="year"
                type="number"
                state={getFieldState('year')}
                errors={errors.year}
              />
              {/* <FormErrorMessage>
                {errors.year && errors.year.message}
              </FormErrorMessage> */}
            </FormControl>
            /
            <FormControl isInvalid={!!errors.month}>
              <Input
                name="month"
                type="number"
                register={register}
                state={getFieldState('month')}
                errors={errors.month}
              />
              {/* <FormErrorMessage>
                {errors.month && errors.month.message}
              </FormErrorMessage> */}
            </FormControl>
            /
            <FormControl isInvalid={!!errors.day}>
              <Input
                name="day"
                type="number"
                register={register}
                state={getFieldState('day')}
                errors={errors.month}
              />
              {/* <FormErrorMessage>
                {errors.month && errors.month.message}
              </FormErrorMessage> */}
            </FormControl>
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
