import React from 'react';
import Lottie from 'lottie-react';
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';

import themeDefaults from '@style/themeDefaults';
import testStarted from '@modules/testProgress/assets/teste-em-andamento.json';
import { useTheme } from 'styled-components';
import RightArrow from '@assets/rightArrow.svg?react';
import { format } from 'date-fns';

interface ITestInProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
  date: Date;
}

const TestInProgressModal: React.FC<ITestInProgressModalProps> = ({
  isOpen,
  onClose,
  date,
}) => {
  const theme = useTheme();

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
      }}
      isCentered
    >
      <ModalOverlay
        background={themeDefaults.colors.shadedOverlay}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      />
      <ModalContent
        minWidth="100vw"
        minHeight="100vh"
        alignItems="center"
        display="flex"
        justifyContent="center"
        borderRadius="0px"
        bgColor="#E6E6E6"
      >
        <ModalHeader
          textAlign="center"
          color={themeDefaults.colors.primary}
          textTransform="uppercase"
          fontWeight="black"
          fontSize={18}
          paddingTop="0px"
          marginTop="-30px"
          width="482px"
          height="300px"
        >
          <Lottie animationData={testStarted} />
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody
          display="flex"
          flexDirection="column"
          alignItems="center"
          color={themeDefaults.colors.primary}
          maxHeight={46}
          marginTop="-40px"
          p={0}
        >
          <Text fontSize={24} fontWeight="bold" align="center">
            Test started
          </Text>

          <Text
            fontSize={24}
            fontWeight="bold"
            align="center"
            color={theme.colors.warmGrayMinus1}
            textTransform="uppercase"
            marginBottom="32px"
          >
            Climate Chamber
          </Text>

          <Box w="310px" display="flex" gap="8px">
            <Box
              w="100%"
              minWidth="152px"
              minHeight="44px"
              borderRadius={12}
              boxShadow="1px 2px 6px 0px rgba(0, 0, 0, 0.15)"
              bgColor={theme.colors.white}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Text
                align="center"
                color={theme.colors.warmGrayMinus1}
                fontSize="14px"
                fontWeight="medium"
              >
                {format(date, 'dd / MM / yyyy')}
              </Text>
            </Box>

            <Box
              w="100%"
              minWidth="152px"
              minHeight="44px"
              borderRadius={12}
              boxShadow="1px 2px 6px 0px rgba(0, 0, 0, 0.15)"
              bgColor={theme.colors.white}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Text
                align="center"
                color={theme.colors.warmGrayMinus1}
                fontSize="14px"
                fontWeight="medium"
              >
                {format(date, 'hh : mm : ss')}
              </Text>
            </Box>
          </Box>
        </ModalBody>

        <ModalFooter marginTop="4%">
          <Box>
            <Button
              border="2px solid"
              borderColor={theme.colors.primary}
              bgColor="transparent"
              color={theme.colors.primary}
              _hover={{ bg: theme.colors.primary, color: theme.colors.white }}
              marginTop="40%"
              w="160px"
              borderRadius={12}
              onClick={onClose}
              gap="10px"
            >
              <p> Follow </p> <RightArrow />
            </Button>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TestInProgressModal;
