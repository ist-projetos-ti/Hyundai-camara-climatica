import React from 'react';
import { Outlet } from 'react-router-dom';
import { Flex, Stack, Image, AbsoluteCenter, Box } from '@chakra-ui/react';
import authPageImage from 'public/hyundai-banner2.png';
import hyundaiLogo from 'public/hyundai-logo-branco.svg';
import { Subtitle } from './styles';

const AuthenticationLayout: React.FC = () => (
  <Stack minH="100vh" direction={{ base: 'column', md: 'row' }}>
    <Flex p={8} flex={1} align="center" justify="center">
      <Stack spacing={4} w="full" maxW="md">
        <Outlet />
      </Stack>
    </Flex>
    <Flex flex={1} justify="right" position="relative">
      <Box>
        <AbsoluteCenter>
          <Image src={hyundaiLogo} objectFit="contain" display="flex" />
        </AbsoluteCenter>
        <AbsoluteCenter>
          <Subtitle> Climate chamber monitoring </Subtitle>
        </AbsoluteCenter>
        <Image
          alt="Login Image"
          objectFit="cover"
          src={authPageImage}
          borderLeftRadius={20}
          width="100%"
        />
      </Box>
    </Flex>
  </Stack>
);

export default AuthenticationLayout;
