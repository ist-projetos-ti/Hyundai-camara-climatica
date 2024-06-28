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
import { PrivatePathsEnum } from '@routes/privateRoutes/privatePaths';
import { useNavigate } from 'react-router-dom';
import { ButtonContainer } from './styles';

interface ITestStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  date: Date;
  variety: 'progress' | 'finished';
}

const TestStatusModal: React.FC<ITestStatusModalProps> = ({
  isOpen,
  onClose,
  date,
  variety,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
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
        bgColor={
          variety === 'progress' ? theme.colors.lightGray : theme.colors.gray
        }
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
          color={
            variety === 'progress'
              ? themeDefaults.colors.primary
              : themeDefaults.colors.green
          }
          maxHeight={46}
          marginTop="-40px"
          p={0}
        >
          <Text fontSize={24} fontWeight="bold" align="center">
            {variety === 'progress' ? `Test started` : `Test Finished`}
          </Text>

          <Text
            fontSize={24}
            fontWeight="bold"
            align="center"
            color={
              variety === 'progress'
                ? theme.colors.warmGrayMinus1
                : theme.colors.white
            }
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
            <ButtonContainer variety={variety}>
              <Button
                border="2px solid"
                borderColor={
                  variety === 'progress'
                    ? theme.colors.primary
                    : theme.colors.white
                }
                bgColor="transparent"
                color={
                  variety === 'progress'
                    ? theme.colors.primary
                    : theme.colors.white
                }
                _hover={
                  variety === 'progress'
                    ? { bg: theme.colors.primary, color: theme.colors.white }
                    : { bg: theme.colors.white, color: theme.colors.gray }
                }
                marginTop="40%"
                w={variety === 'progress' ? '160px' : '245px'}
                borderRadius={12}
                onClick={() => {
                  if (variety === 'progress') onClose();
                  else navigate(PrivatePathsEnum.HISTORICAL_TESTS);
                }}
                gap="10px"
              >
                {variety === 'progress' ? (
                  <p> Follow </p>
                ) : (
                  <p> Go to Test History </p>
                )}
                <RightArrow />
              </Button>
            </ButtonContainer>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TestStatusModal;
