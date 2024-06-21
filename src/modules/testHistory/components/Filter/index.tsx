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
  Section,
} from './styles';
import { FilterData, filterResolver } from './filter.zod';

import DateInput from './DateInput';
import TimeInput from './TimeInput';
import CarDetails from './CarDetails';

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
            render={({ field: { onChange } }) => (
              <DateInput onChange={onChange} />
            )}
          />

          <Controller
            control={control}
            name="time"
            render={({ field: { onChange } }) => (
              <TimeInput onChange={onChange} />
            )}
          />

          <Controller
            control={control}
            name="testName"
            render={({ field: { onChange } }) => (
              <Input placeholder="Test Name" type="text" onChange={onChange} />
            )}
          />
        </DateTimeInputContainer>
        <Section>
          <Controller
            control={control}
            name="carDetails"
            render={({ field: { onChange } }) => (
              <CarDetails onChange={onChange} />
            )}
          />

          <Button type="submit">Ok →</Button>
        </Section>
      </Form>
    </Container>
  );
};

export default Filter;
