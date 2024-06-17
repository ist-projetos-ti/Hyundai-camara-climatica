/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import themeDefaults from '@style/themeDefaults';
import IHistoricalAlertsTable from '@modules/historicalAlerts/interface/IHistoricalAlertsTable';
import { format } from 'date-fns';
import {
  ButtonStyled,
  Container,
  ItemContent,
  ItemTop,
  LabelItemContent,
  OpenItemContent,
  TableContent,
  TableItem,
} from './styles';

interface IUserTableProps {
  data: IHistoricalAlertsTable[];
}

const MobileHistoricalAlertsTable: React.FC<IUserTableProps> = ({ data }) => {
  const [openRows, setOpenRows] = useState(Array(data.length).fill(false));

  const handleToggle = (index: number) => {
    const newOpenRows = [...openRows];
    newOpenRows[index] = !newOpenRows[index];
    setOpenRows(newOpenRows);
  };

  return (
    <Container>
      <TableContent>
        {data.map((alert, index) => {
          return (
            <TableItem key={alert.testId}>
              <ItemTop>
                <ButtonStyled
                  onClick={() => {
                    handleToggle(index);
                  }}
                >
                  <MdKeyboardArrowRight
                    size={20}
                    color={themeDefaults.colors.primary}
                  />
                </ButtonStyled>
                <h1>{alert.equipamentId}</h1>
              </ItemTop>
              <ItemContent>
                <LabelItemContent>
                  <p>{alert.failure}</p>
                </LabelItemContent>
              </ItemContent>
              <OpenItemContent height={openRows[index] ? 14 : 0}>
                <LabelItemContent>
                  <p>{alert.location}</p>
                </LabelItemContent>
                <LabelItemContent>
                  <p>{format(alert.date, 'yyyy / LL / dd')}</p>
                </LabelItemContent>
                <LabelItemContent>
                  <p>{format(alert.date, 'HH:mm:ss')}</p>
                </LabelItemContent>
                <LabelItemContent>
                  <p>{alert.testId}</p>
                </LabelItemContent>
              </OpenItemContent>
            </TableItem>
          );
        })}
      </TableContent>
    </Container>
  );
};

export default MobileHistoricalAlertsTable;
