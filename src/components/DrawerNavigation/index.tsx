/* eslint-disable arrow-body-style */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { SiHyundai } from 'react-icons/si';
import { LiaUserTieSolid } from 'react-icons/lia';
import {
  IoPlayCircleOutline,
  IoLayersOutline,
  IoCloseCircleOutline,
} from 'react-icons/io5';
import { RiSoundModuleLine } from 'react-icons/ri';
import { TbDoorExit, TbCell } from 'react-icons/tb';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  BottomContainerOptions,
  Container,
  LinkStyled,
  TopContainerOptions,
} from './styles';

interface IDrawerNavigationProps {
  openNavigation?: boolean;
  closeNavigation(value: boolean): void;
}

const DrawerNavigation: React.FC<IDrawerNavigationProps> = ({
  openNavigation,
  closeNavigation,
}) => {
  const [open, setOpen] = useState<string>('');

  useEffect(() => {
    if (openNavigation) return setOpen('flex');

    return setOpen('');
  }, [openNavigation]);

  return (
    <Container display={open}>
      <TopContainerOptions>
        {openNavigation ? (
          <button
            onClick={() => {
              closeNavigation(false);
            }}
          >
            <IoCloseCircleOutline size={30} />
          </button>
        ) : (
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <></>
        )}
        <SiHyundai size={50} />
        <LinkStyled _hover={{ textDecoration: 'none' }}>
          <TbCell size={30} />
          <p>Overview</p>
        </LinkStyled>
        <LinkStyled _hover={{ textDecoration: 'none' }}>
          <IoPlayCircleOutline size={30} />
          <p>Testes</p>
        </LinkStyled>
        <LinkStyled _hover={{ textDecoration: 'none' }}>
          <IoLayersOutline size={30} />
          <p>Histórico de testes</p>
        </LinkStyled>
        <LinkStyled _hover={{ textDecoration: 'none' }}>
          <RiSoundModuleLine size={30} />
          <p>Status: climate chamber</p>
        </LinkStyled>
        <LinkStyled
          as={ReactRouterLink}
          to="/USERS"
          _hover={{ textDecoration: 'none' }}
        >
          <LiaUserTieSolid size={30} />
          <p>Users</p>
        </LinkStyled>
      </TopContainerOptions>
      <BottomContainerOptions>
        <LinkStyled _hover={{ textDecoration: 'none' }}>
          <TbDoorExit size={30} />
          <p>Logout</p>
        </LinkStyled>
      </BottomContainerOptions>
    </Container>
  );
};

export default DrawerNavigation;
