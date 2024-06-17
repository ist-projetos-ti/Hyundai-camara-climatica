/* eslint-disable import/no-unresolved */
import React from 'react';

import { useForm } from 'react-hook-form';
import { Container, LabelTitle, DateTimeInputContainer } from './styles';
import { FilterData, filterResolver } from './dateFilter.zod';
// import DateInput from './DateInput';
// import TimeInput from './TimeInput';

const Filter: React.FC = () => {
  useForm<FilterData>({
    resolver: filterResolver,

    mode: 'all',
  });

  return (
    <Container>
      <LabelTitle>{/* Filter */}</LabelTitle>
      <DateTimeInputContainer>
        {/* <DateInput />
      <TimeInput /> */}

        <input name="testName" placeholder="Test Name" />
      </DateTimeInputContainer>
    </Container>
  );
};

export default Filter;
