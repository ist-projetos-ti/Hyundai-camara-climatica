import React from 'react';
import { Outlet } from 'react-router-dom';
import { Flex, Stack, Image } from '@chakra-ui/react';
import authPageImage from 'public/hyundai-banner2.png';
import hyundaiLogo from 'public/hyundai-logo-branco.svg';
import { Subtitle, LogoContainer } from './styles';

const AuthenticationLayout: React.FC = () => (
  <Stack minH="100vh" direction={{ base: 'column', md: 'row' }}>
    <Flex p={8} flex={1} align="center" justify="center">
      <Outlet />
    </Flex>
    <Flex flex={0.8} justify="right" position="relative">
      <LogoContainer>
        <Image
          src={hyundaiLogo}
          objectFit="contain"
          display="flex"
          width="25%"
        />
      </LogoContainer>
      <Subtitle> Climate chamber monitoring </Subtitle>

      <Image
        alt="Login Image"
        objectFit="cover"
        src={authPageImage}
        borderLeftRadius={20}
        width="100%"
      />
    </Flex>
  </Stack>
);

export default AuthenticationLayout;
