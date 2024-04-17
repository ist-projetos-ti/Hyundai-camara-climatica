/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ImageLogo from '@assets/logo.svg';
import { MdOutlineExitToApp } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Avatar, IconButton, useDisclosure } from '@chakra-ui/react';

import { PrivatePathsEnum } from '@routes/privateRoutes/privatePaths';
import { useAuth } from '@modules/auth/hooks/auth';
import {
  Container,
  LogoContent,
  LogoTitleContent,
  InformationsContent,
} from './styles';
import LogOutConfirmation from './LogOutConfirmation';

const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, signOut } = useAuth();

  return (
    <>
      <LogOutConfirmation
        isOpen={isOpen}
        onConfirm={signOut}
        onClose={onClose}
      />
      <Container>
        <LogoContent to={PrivatePathsEnum.HOME}>
          <img src={ImageLogo} />
          <LogoTitleContent>
            <h1>Header</h1>
          </LogoTitleContent>
        </LogoContent>
        <InformationsContent>
          <Link to={PrivatePathsEnum.ME}>
            <Avatar src={user.avatar_url} name={user.name} />
            <h4>{user.name}</h4>
          </Link>
          <IconButton
            icon={<MdOutlineExitToApp />}
            variant="outline"
            colorScheme="red"
            aria-label="Sair"
            fontSize="20px"
            onClick={onOpen}
          />
        </InformationsContent>
      </Container>
    </>
  );
};

export default Header;
