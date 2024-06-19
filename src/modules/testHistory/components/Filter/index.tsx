/* eslint-disable import/no-unresolved */
import React from 'react';

import { useForm } from 'react-hook-form';
import FilterIcon from '@assets/filter.svg?react';

import themeDefaults from '@style/themeDefaults';
import {
  Container,
  LabelTitle,
  DateTimeInputContainer,
  Input,
  LabelContainer,
  Button,
} from './styles';
import { FilterData, filterResolver } from './filter.zod';

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
      <LabelContainer>
        <FilterIcon color={themeDefaults.colors.secondary} />

        <LabelTitle>Filter</LabelTitle>
      </LabelContainer>
      <DateTimeInputContainer>
        <DateInput />
        <TimeInput />

        <Input name="testName" placeholder="Test Name" />

        <CarSettings />
      </DateTimeInputContainer>
      <Button>Ok →</Button>
    </Container>
  );
};

export default Filter;
