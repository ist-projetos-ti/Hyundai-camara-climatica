/**
 * Exemplo de formulário com validação avançada
 */

import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Stack,
} from '@chakra-ui/react';
import { FaKey, FaUser } from 'react-icons/fa';

import exclude from '@utils/exclude';
import { useUser } from '@modules/users/hooks/Users';
import { useAuth } from '@modules/auth/hooks/auth';
import Button from '@components/Button';
import Input from '@components/Form/Input';
import { ButtonsContainer, Container, Form, FormContainer } from './styles';
import { EditUserFormData, editUserFormResolver } from './editUser.zod';

const EditUser: React.FC = () => {
  const { user, updateUser } = useAuth();
  const {
    getFieldState,
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EditUserFormData>({
    resolver: editUserFormResolver,
    mode: 'all',
    defaultValues: {
      name: user.name,
      email: user.email,
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const { UpdateCurrentUser } = useUser();

  const onSubmit = useCallback(
    async (data: EditUserFormData) => {
      try {
        setIsLoading(true);

        // Set delay to smooth loading

        await new Promise((r) => {
          setTimeout(r, 1000);
        });

        const updatedUser = await UpdateCurrentUser({
          ...exclude(data, ['terms', 'email']),
        });

        await updateUser(updatedUser);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    },
    [UpdateCurrentUser, updateUser]
  );

  return (
    <Container>
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Stack
            /* Estilos responsivos do Chakra UI: https://chakra-ui.com/docs/styled-system/responsive-styles */
            direction={['column', 'column', 'row']}
            spacing="1rem"
            w="100%"
          >
            <FormControl isRequired isInvalid={!!errors.name}>
              <FormLabel htmlFor="name">Nome</FormLabel>
              <Input
                register={register}
                name="name"
                state={getFieldState('name')}
                placeholder="Antônio Carlos Jobim"
                errors={errors.name}
                Icon={FaUser}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isDisabled isInvalid={!!errors.email}>
              <FormLabel htmlFor="email">E-mail:</FormLabel>
              <Input
                disabled
                register={register}
                name="email"
                state={getFieldState('email')}
                placeholder="email@email.com"
                errors={errors.email}
                Icon={FaUser}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
          </Stack>
          <Stack
            /* Estilos responsivos do Chakra UI: https://chakra-ui.com/docs/styled-system/responsive-styles */
            direction={['column', 'column', 'row']}
            spacing="1rem"
            w="100%"
          >
            <FormControl isInvalid={!!errors.password}>
              <FormLabel htmlFor="password">Nova senha:</FormLabel>
              <Input
                name="password"
                type="password"
                isPassword
                placeholder="Insira a nova senha"
                register={register}
                state={getFieldState('password')}
                errors={errors.password}
                Icon={FaKey}
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.password_confirmation}>
              <FormLabel htmlFor="password_confirmation">
                Confirmação da senha:
              </FormLabel>
              <Input
                name="password_confirmation"
                type="password"
                isPassword
                placeholder="Insira a confirmação da senha"
                register={register}
                state={getFieldState('password_confirmation')}
                errors={errors.password_confirmation}
                Icon={FaKey}
              />
              <FormErrorMessage>
                {errors.password_confirmation &&
                  errors.password_confirmation.message}
              </FormErrorMessage>
            </FormControl>
          </Stack>
          <FormControl isInvalid={!!errors.old_password}>
            <FormLabel htmlFor="old_password">Senha atual:</FormLabel>
            <Input
              name="old_password"
              type="password"
              isPassword
              placeholder="Insira a senha atual"
              register={register}
              state={getFieldState('old_password')}
              errors={errors.old_password}
              Icon={FaKey}
            />
            <FormErrorMessage>
              {errors.old_password && errors.old_password.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            display="flex"
            flexDir="column"
            isInvalid={!!errors.terms}
          >
            <Checkbox {...register('terms')} colorScheme="blue">
              Aceitar Termos e Condições
            </Checkbox>
            <FormErrorMessage>
              {errors.terms && errors.terms.message}
            </FormErrorMessage>
          </FormControl>
          <ButtonsContainer>
            <Button
              alt
              size="sm"
              label="Resetar"
              disabled={isLoading || isSubmitting}
              onClick={() => reset()}
              type="button"
            />
            <Button
              size="sm"
              label="Salvar"
              disabled={isSubmitting}
              loading={isLoading}
              type="submit"
            />
          </ButtonsContainer>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default EditUser;
