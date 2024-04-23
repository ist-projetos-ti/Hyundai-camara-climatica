import React, { useState } from 'react';

import {
  Box,
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
import KeyIcon from '@assets/keyIcon.svg?react';

import MailIcon from '@assets/email.svg?react';
import TelephoneIcon from '@assets/telephone.svg?react';

import Button from '../../../../components/Button';

interface IStyledModalProps {
  isOpen: boolean;
  onClose: () => void;
  secondary?: boolean;
  isMobile?: boolean;
}

const StyledModal: React.FC<IStyledModalProps> = ({
  isOpen,
  onClose,
  secondary,
  isMobile,
}) => {
  const [selectedOption, setSelectedOption] = useState<
    undefined | 'telephone' | 'email'
  >(undefined);

  const adminContacts = {
    email: 'contato@hyundai.com',
    telephone: '(11) 99999-9999',
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        setSelectedOption(undefined);
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
        borderRadius={20}
        width={isMobile ? '80%' : '48%'}
        maxWidth={isMobile ? '320px' : '48%'}
        height="43%"
        padding={isMobile ? '0px 16px 0px' : '0px 8px'}
        alignItems="spaceBetween"
        display="flex"
        justifyContent="center"
      >
        <ModalHeader
          textAlign="center"
          color={themeDefaults.colors.primary}
          textTransform="uppercase"
          fontWeight="black"
          fontSize={18}
          paddingTop="0px"
          marginTop="-30px"
          // border="1px solid red"
        >
          <Box justifyContent="center" display="flex" pb={4}>
            <KeyIcon />
          </Box>
          Nova senha
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody
          display="flex"
          flexDirection="column"
          alignItems="center"
          color={themeDefaults.colors.primary}
          maxHeight={46}
          p={0}
        >
          <Text
            fontSize={18}
            fontWeight={isMobile ? 'medium' : 'black'}
            align="center"
            marginBottom={isMobile ? '0px' : '20px'}
          >
            Entre em contato com seu adm para gerar uma nova senha
          </Text>
        </ModalBody>

        <ModalFooter
          padding="32px"
          width="100%"
          justifyContent="space-around"
          height="3.8em"
          flexDirection={isMobile ? 'column' : 'row'}
          marginBottom={isMobile ? '40px' : '0px'}
        >
          {!selectedOption ? (
            <>
              <Box
                w="100%"
                maxW={308}
                p={isMobile ? '4px' : '0px 4px'}
                height="3.8em"
                marginBottom={isMobile ? '12px' : '0px'}
              >
                <Button
                  onClick={() => {
                    setSelectedOption('email');
                  }}
                  label="e-mail"
                  secondary={secondary}
                  borderRadius={6}
                  height={isMobile ? '39px' : '100%'}
                >
                  <MailIcon />
                </Button>
              </Box>
              <Box
                w="100%"
                maxW={308}
                p={isMobile ? '4px' : '0px 4px'}
                height="3.8em"
              >
                <Button
                  onClick={() => {
                    setSelectedOption('telephone');
                  }}
                  label="telefone"
                  secondary={secondary}
                  borderRadius={6}
                  height={isMobile ? '39px' : '100%'}
                >
                  <TelephoneIcon />
                </Button>
              </Box>
            </>
          ) : (
            <Text
              color={themeDefaults.colors.primary}
              textAlign="center"
              fontWeight="bold"
              fontSize={24}
              height="40px"
            >
              {selectedOption ? adminContacts[selectedOption] : ''}
            </Text>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default StyledModal;
