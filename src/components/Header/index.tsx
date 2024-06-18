/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BiSearchAlt } from 'react-icons/bi';
import { useAuth } from '@modules/auth/hooks/auth';
import { useNavigate } from 'react-router-dom';
import { PrivatePathsEnum } from '@routes/privateRoutes/privatePaths';
import { ButtonStyle, Container, Content, UserInformation } from './styles';
import LogOutConfirmation from './LogOutConfirmation';

interface IHeaderProps {
  title: string;
}

const Header: React.FC<IHeaderProps> = ({ title }) => {
  const { isOpen, onClose } = useDisclosure();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <LogOutConfirmation
        isOpen={isOpen}
        onConfirm={signOut}
        onClose={onClose}
      />
      <Container>
        <h1>{title}</h1>
        <Content>
          <ButtonStyle>
            <button
              onClick={() => {
                navigate(PrivatePathsEnum.HISTORICAL_ALERTS);
              }}
            >
              <IoMdNotificationsOutline size={30} />
            </button>
            <button>
              <BiSearchAlt size={30} />
            </button>
          </ButtonStyle>
          <UserInformation>
            <h2>{user.name}</h2>
            <p>{user.hcm_code}</p>
          </UserInformation>
        </Content>
      </Container>
    </>
  );
};

export default Header;
