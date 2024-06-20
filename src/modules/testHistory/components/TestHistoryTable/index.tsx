/* eslint-disable arrow-body-style */
/* eslint-disable react/no-unstable-nested-components */
import React, { useCallback } from 'react';
import { LuInfo } from 'react-icons/lu';

import {
  Container,
  TableHeader,
  HeaderItem,
  TableBody,
  TableRow,
  TableItem,
  DateLabel,
  InitialTimeLabel,
  FinalTimeLabel,
} from './styles';

interface ITestHistoryTableProps {
  data: any;
}

const TestHistoryTable: React.FC<ITestHistoryTableProps> = ({ data }) => {
  const formatDate = useCallback((date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year} / ${month} / ${day}`;

    const hour = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const formattedHour = `${hour}:${minutes}:${seconds}`;

    return { formattedDate, formattedHour };
  }, []);

  return (
    <Container>
      <TableHeader>
        <HeaderItem width={15}>Test Name</HeaderItem>
        <HeaderItem width={30}>Description</HeaderItem>
        <HeaderItem width={15}>Start</HeaderItem>
        <HeaderItem width={1} />
        <HeaderItem width={15}>End</HeaderItem>
        <HeaderItem width={15}>Duration</HeaderItem>
        <HeaderItem width={2} />
      </TableHeader>
      <TableBody>
        {data.map(
          (item: {
            id: string;
            start: Date;
            end: Date;
            testName: string;
            description: string;
            duration: string;
          }) => {
            const { formattedDate: initialDate, formattedHour: initialHour } =
              formatDate(item.start);

            const { formattedDate: finalDate, formattedHour: finalHour } =
              formatDate(item.end);

            return (
              <TableRow key={item.id}>
                <TableItem width={15}>{item.testName}</TableItem>
                <TableItem width={30}>{item.description}</TableItem>
                <TableItem width={15}>
                  <DateLabel> {initialDate} </DateLabel>
                  <InitialTimeLabel>{initialHour}</InitialTimeLabel>
                </TableItem>
                <TableItem width={1}>{'>'}</TableItem>
                <TableItem width={15}>
                  <FinalTimeLabel>{finalHour} </FinalTimeLabel>
                  <DateLabel> {finalDate} </DateLabel>
                </TableItem>
                <TableItem width={15}>{item.duration}</TableItem>
                <TableItem width={2}>
                  <LuInfo size={18} />
                </TableItem>
              </TableRow>
            );
          }
        )}
      </TableBody>
    </Container>
  );
};

export default TestHistoryTable;
