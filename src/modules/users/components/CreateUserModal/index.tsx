import React from 'react';
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Select,
  Button,
} from '@chakra-ui/react';
import themeDefaults from '@style/themeDefaults';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useUser } from '@modules/users/hooks/Users';
import { MdAddCircleOutline } from 'react-icons/md';
import { Form } from './styles';

interface IFormInput {
  hcm_code: string;
  name: string;
  type: 'administrator' | 'user';
}

const CreateUserModal: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { CreateUser } = useUser();
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (userData) => {
    await CreateUser(userData);
    onClose();
  };

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
          <ModalHeader color={themeDefaults.colors.addButton}>
            New User Registration
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <h3>HCM Code</h3>
              <input {...register('hcm_code')} type="text" />
              <h3>Name</h3>
              <input {...register('name')} type="text" />
              <h3>Type</h3>
              <Select
                borderRadius={15}
                backgroundColor="#efefef"
                height={54}
                placeholder="Select option"
                {...register('type')}
              >
                <option value="ADMIN">ADMIN</option>
                <option value="DEFAULT">DEFAULT</option>
              </Select>
              <h3>Password</h3>
              <h2>1234MUDAR </h2>
              <Button
                marginTop={5}
                colorScheme="teal"
                variant="outline"
                w={160}
                marginBottom={5}
                type="submit"
              >
                Salvar
              </Button>
            </Form>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Button
        onClick={onOpen}
        leftIcon={<MdAddCircleOutline size={23} />}
        colorScheme="whiteAlpha"
        fontSize={18}
        height={55}
        width={300}
        backgroundColor={themeDefaults.colors.addButton}
        variant="solid"
        _hover={{
          transform: 'scale(1.1)',
        }}
      >
        New user
      </Button>
    </>
  );
};

export default CreateUserModal;
