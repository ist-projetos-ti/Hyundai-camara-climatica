/* eslint-disable arrow-body-style */
/* eslint-disable react/no-unstable-nested-components */
import React, { useCallback, useState } from 'react';
import { RiExpandUpDownLine } from 'react-icons/ri';

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
  Button,
} from './styles';

interface ITestHistoryTableProps {
  data: any;
}

interface ITest {
  id: string;
  start: Date;
  end: Date;
  testName: string;
  description: string;
  duration: string;
}

const TestHistoryTable: React.FC<ITestHistoryTableProps> = ({ data }) => {
  const [formattedData, setFormattedData] = useState<ITest[]>(data);
  const [currentOrderStart, setCurrentOrderStart] = useState<
    'asc' | 'desc' | null
  >(null);
  const [currentOrderEnd, setCurrentOrderEnd] = useState<'asc' | 'desc' | null>(
    null
  );

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

  const OrderTableByStart = useCallback(() => {
    const order =
      currentOrderStart && currentOrderStart === 'asc' ? 'desc' : 'asc';
    setCurrentOrderStart(order);

    setFormattedData(
      formattedData.sort((a, b) => {
        const dateA = new Date(a.start).getTime();
        const dateB = new Date(b.start).getTime();

        if (order === 'asc') {
          return dateA - dateB;
        }
        return dateB - dateA;
      })
    );
  }, [currentOrderStart, formattedData]);

  const OrderTableByEnd = useCallback(() => {
    const order = currentOrderEnd && currentOrderEnd === 'asc' ? 'desc' : 'asc';
    setCurrentOrderEnd(order);
    setFormattedData(
      formattedData.sort((a, b) => {
        const dateA = new Date(a.end).getTime();
        const dateB = new Date(b.end).getTime();

        if (order === 'asc') {
          return dateA - dateB;
        }
        return dateB - dateA;
      })
    );
  }, [currentOrderEnd, formattedData]);

  return (
    <Container>
      <TableHeader>
        <HeaderItem width={15}>Test Name</HeaderItem>
        <HeaderItem width={30}>Description</HeaderItem>
        <HeaderItem width={15}>
          <Button type="button" onClick={OrderTableByStart}>
            Start <RiExpandUpDownLine size={17} />
          </Button>
        </HeaderItem>
        <HeaderItem width={1} />
        <HeaderItem width={15}>
          <Button type="button" onClick={OrderTableByEnd}>
            End <RiExpandUpDownLine size={17} />
          </Button>
        </HeaderItem>
        <HeaderItem width={15}>Duration</HeaderItem>
        <HeaderItem width={2} />
      </TableHeader>
      <TableBody>
        {formattedData.map((item: ITest) => {
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
        })}
      </TableBody>
    </Container>
  );
};

export default TestHistoryTable;
