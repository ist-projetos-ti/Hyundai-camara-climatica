/* eslint-disable import/no-unresolved */
import React from 'react';

import { Container, LabelTitle, DateInputContainer } from './styles';
import DateInput from './DateInput';
import TimeInput from './TimeInput';

const Filter: React.FC = () => (
  <Container>
    <LabelTitle>{/* Filter */}</LabelTitle>
    <DateInputContainer>
      <DateInput />
      <TimeInput />
    </DateInputContainer>
  </Container>
);

export default Filter;
