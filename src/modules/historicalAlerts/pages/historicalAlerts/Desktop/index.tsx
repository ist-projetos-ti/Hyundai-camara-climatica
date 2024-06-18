/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
import HistoricalAlertsTable from '@modules/historicalAlerts/components/historicalAlertsTable';
import IHistoricalAlertsTable from '@modules/historicalAlerts/interface/IHistoricalAlertsTable';
import { LuChevronsUpDown } from 'react-icons/lu';
import React, { useCallback, useState } from 'react';
import { data } from '@utils/dummy-data';
import { Container, HeaderItem, TableBody, TableHeader } from './styles';

const HistoricalAlertsDesktop: React.FC = () => {
  const [historicalAlertsData, setHistoricalAlertData] =
    useState<IHistoricalAlertsTable[]>(data);

  const [sortOrderDate, setSortOrderDate] = useState<'asc' | 'desc'>('asc');

  const orderByDate = useCallback(() => {
    const sortedData = [...historicalAlertsData].sort((a, b) => {
      if (sortOrderDate === 'asc') {
        return a.date.getTime() - b.date.getTime();
      }
      return b.date.getTime() - a.date.getTime();
    });
    setHistoricalAlertData(sortedData);
    setSortOrderDate(sortOrderDate === 'asc' ? 'desc' : 'asc');
  }, [historicalAlertsData, sortOrderDate]);

  const orderByTime = useCallback(() => {
    const sortedData = [...historicalAlertsData].sort((a, b) => {
      if (sortOrderDate === 'asc') {
        return a.time.getTime() - b.time.getTime();
      }
      return b.time.getTime() - a.time.getTime();
    });
    setHistoricalAlertData(sortedData);
    setSortOrderDate(sortOrderDate === 'asc' ? 'desc' : 'asc');
  }, [historicalAlertsData, sortOrderDate]);

  return (
    <Container>
      <TableHeader>
        <HeaderItem width={16.5}>
          <p>Equipament ID</p>
        </HeaderItem>
        <HeaderItem width={16.5}>
          <p>Failure</p>
        </HeaderItem>
        <HeaderItem width={20}>
          <p>Location</p>
        </HeaderItem>
        <HeaderItem width={10}>
          <button onClick={orderByDate}>
            <p>Date</p> <LuChevronsUpDown />
          </button>
        </HeaderItem>
        <HeaderItem width={20}>
          <button onClick={orderByTime}>
            <p>Time</p> <LuChevronsUpDown />
          </button>
        </HeaderItem>
        <HeaderItem width={16.5}>
          <p>Test ID</p>
        </HeaderItem>
      </TableHeader>
      <TableBody>
        {historicalAlertsData.map(
          (value: IHistoricalAlertsTable, index: number) => {
            return <HistoricalAlertsTable key={index} data={value} />;
          }
        )}
      </TableBody>
    </Container>
  );
};

export default HistoricalAlertsDesktop;
