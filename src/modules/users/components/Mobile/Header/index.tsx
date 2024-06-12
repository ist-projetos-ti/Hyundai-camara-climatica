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

interface IHeaderMobileProps {
  activateNavigation(activate: boolean): void;
}

const HeaderMobile: React.FC<IHeaderMobileProps> = ({ activateNavigation }) => {
  return (
    <Container>
      <Grid>
        <TopHeaderContent>
          <NavigationButton
            onClick={() => {
              activateNavigation(true);
            }}
          >
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
