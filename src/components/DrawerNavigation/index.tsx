/* eslint-disable import/no-unresolved */
import React from 'react';
import { SiHyundai } from 'react-icons/si';
import { LiaUserTieSolid } from 'react-icons/lia';
import { IoPlayCircleOutline, IoLayersOutline } from 'react-icons/io5';
import { RiSoundModuleLine } from 'react-icons/ri';
import { TbDoorExit, TbCell } from 'react-icons/tb';
import {
  BottomContainerOptions,
  Container,
  LinkStyled,
  TopContainerOptions,
} from './styles';

const DrawerNavigation: React.FC = () => (
  <Container>
    <TopContainerOptions>
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
      <LinkStyled _hover={{ textDecoration: 'none' }}>
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

export default DrawerNavigation;
