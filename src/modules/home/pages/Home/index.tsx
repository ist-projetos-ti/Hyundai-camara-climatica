import React, { useEffect } from 'react';

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from '@chakra-ui/react';
import { MdAddCircleOutline } from 'react-icons/md';
import UserTable from '@modules/home/components/UserTable';
import themeDefaults from '@style/themeDefaults';
import { Container, Form, TableContainer } from './styles';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={themeDefaults.colors.primary}>
            New User Registration
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Form>
              <h3>Username</h3>
              <input type="text" />
              <h3>Name</h3>
              <input type="text" />
              <h3>Username</h3>
              <Select
                borderRadius={15}
                backgroundColor="#efefef"
                height={54}
                placeholder="Select option"
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <h3>Password</h3>
              <h2>1234MUDAR </h2>
            </Form>
            <Button
              onClick={onClose}
              marginTop={10}
              colorScheme="teal"
              variant="outline"
              w={160}
              marginBottom={5}
            >
              Salvar
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Container>
        <Button
          onClick={onOpen}
          leftIcon={<MdAddCircleOutline size={23} />}
          colorScheme="whiteAlpha"
          fontSize={18}
          height={55}
          width={300}
          backgroundColor={themeDefaults.colors.primary}
          variant="solid"
          _hover={{
            transform: 'scale(1.1)',
          }}
        >
          New user
        </Button>
        <TableContainer>
          <UserTable />
        </TableContainer>
      </Container>
    </>
  );
};

export default Home;
