/* eslint-disable import/no-unresolved */
import React from 'react';

import { useForm } from 'react-hook-form';
import { Container, LabelTitle, DateTimeInputContainer, Input } from './styles';
import { FilterData, filterResolver } from './dateFilter.zod';
import DateInput from './DateInput';
import TimeInput from './TimeInput';
import CarSettings from './CarSettings';

const Filter: React.FC = () => {
  useForm<FilterData>({
    resolver: filterResolver,

    mode: 'all',
  });

  return (
    <Container>
      <LabelTitle>{/* Filter */}</LabelTitle>
      <DateTimeInputContainer>
        <DateInput />
        <TimeInput />

        <Input name="testName" placeholder="Test Name" />

        <CarSettings />
      </DateTimeInputContainer>
    </Container>
  );
};

export default Filter;
