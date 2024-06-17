/* eslint-disable import/no-unresolved */
import React from 'react';

import { useForm } from 'react-hook-form';
import Input from '@components/Form/Input';
import { Container, LabelTitle, DateTimeInputContainer } from './styles';
import { FilterData, filterResolver } from './dateFilter.zod';
// import DateInput from './DateInput';
// import TimeInput from './TimeInput';

const Filter: React.FC = () => {
  const { register, getFieldState } = useForm<FilterData>({
    resolver: filterResolver,

    mode: 'all',
  });

  return (
    <Container>
      <LabelTitle>{/* Filter */}</LabelTitle>
      <DateTimeInputContainer>
        {/* <DateInput />
      <TimeInput /> */}

        <Input
          register={register}
          name="testName"
          state={getFieldState('testName')}
          placeholder="Test Name"
        />
      </DateTimeInputContainer>
    </Container>
  );
};

export default Filter;
