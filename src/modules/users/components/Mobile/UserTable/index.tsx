/* eslint-disable react/self-closing-comp */
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import themeDefaults from '@style/themeDefaults';
import {
  ButtonStyled,
  Container,
  ItemContent,
  ItemTop,
  OpenItemContent,
  TableContent,
  TableItem,
} from './styles';

/* eslint-disable arrow-body-style */
const UserTableMobile: React.FC = () => {
  return (
    <Container>
      <TableContent>
        <TableItem>
          <ItemTop>
            <ButtonStyled>
              <MdKeyboardArrowRight
                size={20}
                color={themeDefaults.colors.primary}
              />
            </ButtonStyled>
            <h1>User</h1>
          </ItemTop>
          <ItemContent></ItemContent>
          <OpenItemContent></OpenItemContent>
        </TableItem>
      </TableContent>
    </Container>
  );
};

export default UserTableMobile;
