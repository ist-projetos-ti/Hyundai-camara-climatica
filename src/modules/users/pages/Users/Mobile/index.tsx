/* eslint-disable arrow-body-style */
import React from 'react';
import HeaderMobile from '@modules/users/components/Mobile/Header';
import { Button } from '@chakra-ui/react';
import themeDefaults from '@style/themeDefaults';
import { MdAddCircleOutline } from 'react-icons/md';
import UserTableMobile from '@modules/users/components/Mobile/UserTable';
import { Container, Grid } from '../styles';

const MobileUsersPage: React.FC = () => {
  return (
    <Container>
      <HeaderMobile />
      <Grid>
        <Button
          leftIcon={<MdAddCircleOutline size={23} />}
          colorScheme="whiteAlpha"
          fontSize={18}
          height="3rem"
          width="100%"
          backgroundColor={themeDefaults.colors.primary}
          variant="solid"
          _hover={{
            transform: 'scale(1.1)',
          }}
        >
          New user
        </Button>
        <UserTableMobile />
      </Grid>
    </Container>
  );
};

export default MobileUsersPage;
