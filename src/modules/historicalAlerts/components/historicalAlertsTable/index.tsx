import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { format } from 'date-fns';
import IHistoricalAlertsTable from '@modules/historicalAlerts/interface/IHistoricalAlertsTable';
import { TableItem, TableRow } from './styles';

interface IHistoricalAlertsTableProps {
  data: IHistoricalAlertsTable;
}

const HistoricalAlertsTable: React.FC<IHistoricalAlertsTableProps> = ({
  data,
}) => (
  <TableRow>
    <TableItem width={16.5}>
      <p>{data.equipamentId}</p>
    </TableItem>
    <TableItem width={16.5}>
      <p>{data.failure}</p>
    </TableItem>
    <TableItem width={20}>
      <p>{data.location}</p>
    </TableItem>
    <TableItem width={10}>
      <p>{format(data.date, 'yyyy / LL / dd')}</p>
    </TableItem>
    <TableItem width={20}>
      <p>{format(data.date, 'HH:mm:ss')}</p>
    </TableItem>
    <TableItem width={16.5}>
      <p>{data.testId}</p>
    </TableItem>
  </TableRow>
);

export default HistoricalAlertsTable;
