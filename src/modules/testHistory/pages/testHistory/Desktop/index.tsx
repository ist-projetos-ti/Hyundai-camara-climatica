import React, { useCallback, useState } from 'react';

import TestHistoryTable from '@modules/testHistory/components/TestHistoryTable';
import Filter from '@modules/testHistory/components/Filter';
import TotalHourMachineLabel from '@modules/testHistory/components/TotalHourMachineLabel';
import { GoDownload } from 'react-icons/go';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';

import { handleExportReport } from '@modules/testHistory/functions/HandleExports';
import {
  differenceInDays,
  addDays,
  differenceInHours,
  addHours,
  differenceInMinutes,
  addMinutes,
  differenceInSeconds,
} from 'date-fns';
import { IData, IFilterDate } from '@modules/testHistory/interfaces';
import {
  Container,
  TableContainer,
  SettingsSection,
  Button,
  Section,
} from './styles';

const DesktopTestHistoryPage: React.FC = () => {
  const data = [];

  for (let i = 0; i < 20; i += 1) {
    data.push({
      id: faker.string.uuid(),
      testName: faker.lorem.words(),
      description: faker.lorem.sentences(3),
      start: faker.date.past(),
      end: faker.date.recent(),
    });
  }

  const GetDifference = useCallback((startDate: Date, endDate: Date) => {
    const days = differenceInDays(endDate, startDate);
    const startDateAfterDays = addDays(startDate, days);

    const hours = differenceInHours(endDate, startDateAfterDays);
    const startDateAfterHours = addHours(startDateAfterDays, hours);

    const minutes = differenceInMinutes(endDate, startDateAfterHours);
    const startDateAfterMinutes = addMinutes(startDateAfterHours, minutes);

    const seconds = differenceInSeconds(endDate, startDateAfterMinutes);

    if (days > 0)
      return `${String(days).padStart(2, '0')}d:${String(hours).padStart(
        2,
        '0'
      )}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
        2,
        '0'
      )}`;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
      2,
      '0'
    )}:${String(seconds).padStart(2, '0')}`;
  }, []);

  const formattedData: IData[] = data.map((item) => ({
    testName: item.testName,
    description: item.description,
    start: item.start,
    end: item.end,
    duration: GetDifference(item.start, item.end),
  }));

  const [currentOrderedValues, setCurrentOrderedValues] =
    useState<IData[]>(formattedData);

  const [filterDate, setFilterDate] = useState<IFilterDate>({} as IFilterDate);

  return (
    <Container>
      <SettingsSection>
        <Section>
          <TotalHourMachineLabel />
          <Filter setFilterDate={setFilterDate} />
        </Section>
      </SettingsSection>

      <TableContainer>
        <TestHistoryTable
          data={formattedData}
          setCurrentOrderedValues={setCurrentOrderedValues}
        />
        <Button
          onClick={() =>
            handleExportReport({
              values: {
                headers: [
                  'Nome do teste',
                  'Descrição',
                  'Início',
                  'Fim',
                  'Duração',
                ],
                data: currentOrderedValues,
              },
              filters: {
                start: filterDate.start || '',
                end: filterDate.end || '',
              },
            })
          }
        >
          <GoDownload size={23} />
          Export List
        </Button>
      </TableContainer>
    </Container>
  );
};

export default DesktopTestHistoryPage;
