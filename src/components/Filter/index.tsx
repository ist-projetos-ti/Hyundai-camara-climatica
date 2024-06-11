/* eslint-disable import/no-unresolved */
import React from 'react';

import { Container, LabelTitle, DateInputContainer } from './styles';
import DateInput from './DateInput';

const Filter: React.FC = () => (
  <Container>
    <LabelTitle>{/* Filter */}</LabelTitle>
    <DateInputContainer>
      <DateInput />
    </DateInputContainer>
  </Container>
);

export default Filter;
