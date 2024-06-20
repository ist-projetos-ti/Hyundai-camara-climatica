import React from 'react';

import TestHistoryTable from '@modules/testHistory/components/TestHistoryTable';
import Filter from '@modules/testHistory/components/Filter';
import TotalHourMachineLabel from '@modules/testHistory/components/TotalHourMachineLabel';
import { Container, TableContainer, FilterContainer } from './styles';

const DesktopTestHistoryPage: React.FC = () => (
  <Container>
    <FilterContainer>
      <TotalHourMachineLabel />
      <Filter />
    </FilterContainer>
    <TableContainer>
      <TestHistoryTable
        data={[
          {
            id: 1,
            start: new Date(),
            end: new Date(),
            description: 'Test description example HjdLdl_056698',
            testName: 'TestName 01XJLY - SS',
          },
          {
            id: 2,
            start: new Date(),
            end: new Date(),
            description: 'Test description example HjdLdl_056698',
            testName: 'TestName 01XJLY - SS',
          },
          {
            id: 3,
            start: new Date(),
            end: new Date(),
            description: 'Test description example HjdLdl_056698',
            testName: 'TestName 01XJLY - SS',
          },
        ]}
      />
    </TableContainer>
  </Container>
);

export default DesktopTestHistoryPage;
