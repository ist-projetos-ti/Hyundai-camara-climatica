/* eslint-disable arrow-body-style */
import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BiSearchAlt } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

import { PrivatePathsEnum } from '@routes/privateRoutes/privatePaths';
import {
  Container,
  Grid,
  HeaderButton,
  NavigationButton,
  TopHeaderContent,
} from './styles';

interface IHeaderMobileProps {
  activateNavigation(activate: boolean): void;
  title: string;
  children?: React.ReactNode;
}

const HeaderMobile: React.FC<IHeaderMobileProps> = ({
  activateNavigation,
  title,
  children,
}) => {
  const navigate = useNavigate();

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
            {children && <HeaderButton> {children} </HeaderButton>}

            <HeaderButton>
              <BiSearchAlt size={30} />
            </HeaderButton>

            <HeaderButton>
              <button
                onClick={() => {
                  navigate(PrivatePathsEnum.HISTORICAL_ALERTS);
                }}
              >
                <IoMdNotificationsOutline size={30} />
              </button>
            </HeaderButton>
          </div>
        </TopHeaderContent>
        <h1>{title}</h1>
      </Grid>
    </Container>
  );
};

export default HeaderMobile;
