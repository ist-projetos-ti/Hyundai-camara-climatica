/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import CalendarIcon from '@assets/calendar.svg?react';

import {
  Container,
  DateSelector,
  DateInputBox,
  Input,
  SubmitButton,
  InputLabel,
  InputGroup,
} from './styles';

const DateInput: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState(true);

  return (
    <Container>
      <DateSelector
        selected={selectedItem}
        onClick={() => setSelectedItem(true)}
      >
        <CalendarIcon />
        <p>Start</p>
        <DateInputBox selected={false}>
          <InputGroup>
            <InputLabel>Year</InputLabel>
            <Input value="2023" />
          </InputGroup>
          /
          <InputGroup>
            <InputLabel>Month</InputLabel>
            <Input value="04" />
          </InputGroup>
          /
          <InputGroup>
            <InputLabel>Day</InputLabel>
            <Input value="04" />
          </InputGroup>
          <SubmitButton>Ok →</SubmitButton>
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
