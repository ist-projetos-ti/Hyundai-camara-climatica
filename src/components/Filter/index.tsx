/* eslint-disable import/no-unresolved */
import React from 'react';

import { useForm } from 'react-hook-form';
import { BiFilterAlt } from 'react-icons/bi';
import themeDefaults from '@style/themeDefaults';
import {
  Container,
  LabelTitle,
  DateTimeInputContainer,
  Input,
  LabelContainer,
} from './styles';
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
      <LabelContainer>
        <BiFilterAlt size={27} color={themeDefaults.colors.secondary} />

        <LabelTitle>Filter</LabelTitle>
      </LabelContainer>
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
