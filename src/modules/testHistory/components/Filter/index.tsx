/* eslint-disable import/no-unresolved */
import React, { useCallback, useEffect } from 'react';

import { useForm, Controller } from 'react-hook-form';
import FilterIcon from '@assets/filter.svg?react';

import themeDefaults from '@style/themeDefaults';
import {
  Container,
  LabelTitle,
  DateTimeInputContainer,
  Input,
  LabelContainer,
  Button,
  Form,
} from './styles';
import { FilterData, filterResolver } from './filter.zod';

import DateInput from './DateInput';
import TimeInput from './TimeInput';
import CarSettings from './CarSettings';

const Filter: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FilterData>({
    resolver: filterResolver,

    mode: 'all',
  });

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const onSubmit = useCallback((data: any) => {
    console.log('onsubmit: ', data);
  }, []);

  return (
    <Container>
      <LabelContainer>
        <FilterIcon color={themeDefaults.colors.secondary} />

        <LabelTitle>Filter</LabelTitle>
      </LabelContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <DateTimeInputContainer>
          <Controller
            control={control}
            name="date"
            // error={errors.date}
            render={({ field: { onChange } }) => (
              <DateInput onChange={onChange} />
            )}
          />

          <Controller
            control={control}
            name="time"
            // error={errors.time}
            render={({ field: { onChange } }) => (
              <TimeInput onChange={onChange} />
            )}
          />

          <Controller
            control={control}
            name="testName"
            // error={errors.testName}
            render={({ field: { onChange } }) => (
              <Input placeholder="Test Name" type="text" onChange={onChange} />
            )}
          />

          <Controller
            control={control}
            name="carSettings"
            // error={errors.testName}
            render={({ field: { onChange } }) => (
              <CarSettings onChange={onChange} />
            )}
          />
        </DateTimeInputContainer>
        <Button type="submit">Ok →</Button>
      </Form>
    </Container>
  );
};

export default Filter;
