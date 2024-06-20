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
      <TestHistoryTable data={[{ id: 1 }, { id: 2 }, { id: 3 }]} />
    </TableContainer>
  </Container>
);

export default DesktopTestHistoryPage;
