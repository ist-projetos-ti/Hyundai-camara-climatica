import React from 'react';
import { format } from 'date-fns';
import { DateTimeInformation, Container } from './styles';

interface ITimeInformationsProps {
  label: string;
  date: Date;
  time: Date;
}

const TimeInformations: React.FC<ITimeInformationsProps> = ({
  date,
  label,
  time,
}) => (
  <Container>
    <h3>{label}</h3>
    <DateTimeInformation>
      <p>{format(date, 'dd / MM / yyyy')}</p>
    </DateTimeInformation>
    <DateTimeInformation>
      <p>{format(time, 'hh:mm:ss')}</p>
    </DateTimeInformation>
  </Container>
);

export default TimeInformations;
