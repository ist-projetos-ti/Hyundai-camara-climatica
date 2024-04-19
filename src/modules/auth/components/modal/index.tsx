import React from 'react';

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
}

const StyledModal: React.FC<IStyledModalProps> = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} isCentered>
    <ModalOverlay
      background={themeDefaults.colors.shadedOverlay}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    />
    <ModalContent
      borderRadius={20}
      maxWidth="48%"
      height="43%"
      padding="8px"
      alignItems="center"
      display="flex"
      justifyContent="center"
    >
      <ModalHeader
        textAlign="center"
        color={themeDefaults.colors.primary}
        textTransform="uppercase"
        fontWeight="black"
        fontSize={18}
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
        alignItems="flex-start"
        color={themeDefaults.colors.primary}
        maxHeight={46}
        p={0}
      >
        <Text fontSize={18} fontWeight="black" align="center">
          Entre em contato com seu adm para gerar uma nova senha
        </Text>
      </ModalBody>

      <ModalFooter
        padding="32px"
        width="100%"
        justifyContent="space-around"
        height="3.8em"
      >
        <Box w="100%" maxW={308} p="0px 4px" height="3.8em">
          <Button onClick={onClose} label="e-mail" height="100%">
            <MailIcon />
          </Button>
        </Box>
        <Box w="100%" maxW={308} p="0px 4px" height="3.8em">
          <Button onClick={onClose} label="telefone" height="100%">
            <TelephoneIcon />
          </Button>
        </Box>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default StyledModal;
