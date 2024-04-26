/* eslint-disable arrow-body-style */
import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BiSearchAlt } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import {
  Container,
  Grid,
  HeaderButton,
  NavigationButton,
  TopHeaderContent,
} from './styles';

const HeaderMobile: React.FC = () => {
  return (
    <Container>
      <Grid>
        <TopHeaderContent>
          <NavigationButton>
            <RxHamburgerMenu size={28} />
          </NavigationButton>
          <div>
            <HeaderButton>
              <BiSearchAlt size={30} />
            </HeaderButton>
            <HeaderButton>
              <IoMdNotificationsOutline size={30} />
            </HeaderButton>
          </div>
        </TopHeaderContent>
        <h1>User Registration List</h1>
      </Grid>
    </Container>
  );
};

export default HeaderMobile;
