/* eslint-disable arrow-body-style */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { LuInfo } from 'react-icons/lu';

import {
  Container,
  TableHeader,
  HeaderItem,
  TableBody,
  TableRow,
  TableItem,
} from './styles';

interface ITestHistoryTableProps {
  data: any;
}

const TestHistoryTable: React.FC<ITestHistoryTableProps> = ({ data }) => {
  return (
    <Container>
      <TableHeader>
        <HeaderItem width={15}>Test Name</HeaderItem>
        <HeaderItem width={30}>Description</HeaderItem>
        <HeaderItem width={15}>Start</HeaderItem>
        <HeaderItem width={15}>End</HeaderItem>
        <HeaderItem width={15}>Duration</HeaderItem>
        <HeaderItem width={5} />
      </TableHeader>
      <TableBody>
        {data.map((user: { id: React.Key | null | undefined }) => {
          return (
            <TableRow key={user.id}>
              <TableItem width={15}>TestName 01XJLY - SS</TableItem>
              <TableItem width={30}>
                Test description example HjdLdl__056698
              </TableItem>
              <TableItem width={15}>2022 / 08 / 19 16:00:45</TableItem>
              <TableItem width={15}>16:00:45 2022 / 08 / 19</TableItem>
              <TableItem width={15}>00:00:10</TableItem>
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
