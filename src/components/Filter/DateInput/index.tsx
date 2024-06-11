/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import CalendarIcon from '@assets/calendar.svg?react';
import { PatternFormat } from 'react-number-format';

import {
  Container,
  DateSelector,
  SubmitButton,
  InputLabel,
  InputGroup,
  DateDivider,
  DateInputBox,
} from './styles';

const DateInput: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState(true);
  const [monthValue, setMonthValue] = useState('');
  const [yearValue] = useState('');
  const [dayValue, setDayValue] = useState('');

  return (
    <Container>
      <DateSelector
        selected={selectedItem}
        onClick={() => setSelectedItem(true)}
      >
        <CalendarIcon />
        <p>Start</p>
        <DateInputBox selected={false}>
          <InputGroup variety="year">
            <InputLabel>Year</InputLabel>
            <PatternFormat
              format="####"
              mask="_"
              valueIsNumericString
              displayType="input"
              value={yearValue}
              isAllowed={(values) => {
                const { value } = values;
                const number = Number(value);
                return number >= 0 && number <= new Date().getFullYear();
              }}
            />
          </InputGroup>
          <DateDivider> / </DateDivider>
          <InputGroup>
            <InputLabel>Month</InputLabel>
            <PatternFormat
              format="##"
              mask="_"
              valueIsNumericString
              displayType="input"
              value={monthValue}
              onBlur={(values) => {
                const { target } = values;
                const number = target.value.match(/.{1,1}/g);
                if (number && number[1] === '_') setMonthValue(`0${number[0]}`);
                if (target.value && target.value === '00') setMonthValue(`01`);
              }}
              isAllowed={(values) => {
                const { value } = values;
                const number = Number(value);
                return number >= 0 && number <= 12;
              }}
            />
          </InputGroup>
          <DateDivider> / </DateDivider>
          <InputGroup>
            <InputLabel>Day</InputLabel>
            <PatternFormat
              format="##"
              mask="_"
              displayType="input"
              valueIsNumericString
              value={dayValue}
              onBlur={(values) => {
                const { target } = values;
                const number = target.value.match(/.{1,1}/g);
                if (number && number[1] === '_') setDayValue(`0${number[0]}`);
                if (target.value && target.value === '00') setDayValue(`01`);
              }}
              isAllowed={(values) => {
                const { value } = values;
                const number = Number(value);
                return number >= 0 && number <= 31;
              }}
            />
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
