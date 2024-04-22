import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { Box, FormControl, FormErrorMessage } from '@chakra-ui/react';

// eslint-disable-next-line import/no-unresolved
import { useToast } from '@hooks/Toast';
import { errorHandler } from '@errors/errorHandler';
import Input from '@components/Form/Input';
import { PrivatePathsEnum } from '@routes/privateRoutes/privatePaths';
import { useAuth } from '@modules/auth/hooks/auth';
import userIcon from '@assets/userIcon.svg?react';
import padlock from '@assets/padlock.svg?react';

import Button from '@components/Button';

import { Container, Content, Form, FormContainer, Title } from './styles';
import {
  NewPasswordFormData,
  NewPasswordFormResolver,
} from '../newPasswordForm.zod';

const DesktopSetNewPassword: React.FC = () => {
  const {
    getFieldState,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<NewPasswordFormData>({
    resolver: NewPasswordFormResolver,
    mode: 'all',
  });

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { updateUser, user } = useAuth();
  const { addToast } = useToast();

  const onSubmit = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (data: NewPasswordFormData) => {
      try {
        setIsLoading(true);
        // Set delay to smooth loading

        await new Promise((r) => {
          setTimeout(r, 1000);
        });

        await updateUser({
          id: user.id,
          hcm_code: data.hcm_code,
          password: data.password,
          password_confirmation: data.password_confirmation,
        });

        navigate(PrivatePathsEnum.HOME);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);

        errorHandler({
          error,
          addToast,
          title: 'Ocorreu um erro!',
        });
      }
    },
    [addToast, navigate, updateUser, user.id]
  );

  useEffect(() => {
    document.title = 'newPassword';
  }, []);

  return (
    <Container>
      <Content>
        <Title>Welcome</Title>
        <FormContainer>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <Input
                register={register}
                name="hcm_code"
                state={{
                  invalid: false,
                  isDirty: false,
                  isTouched: false,
                  error: undefined,
                }}
                placeholder="HCM user"
                Icon={userIcon}
                disabled
                value={user.hcm_code}
                defaultValue={user.hcm_code}
                darkMode
              />
            </FormControl>

            <Box w="100%" p="8px 0">
              <Box w="100%" p="8px 0">
                <FormControl isInvalid={!!errors.password}>
                  <Input
                    name="password"
                    type="password"
                    isPassword
                    placeholder="Nova senha"
                    register={register}
                    state={getFieldState('password')}
                    errors={errors.password}
                    Icon={padlock}
                    darkMode
                  />
                  <FormErrorMessage>
                    {errors.password && errors.password.message}
                  </FormErrorMessage>
                </FormControl>
              </Box>
              <Box w="100%" p="8px 0">
                <FormControl isInvalid={!!errors.password_confirmation}>
                  <Input
                    name="password_confirmation"
                    type="password"
                    isPassword
                    placeholder="Confirmar senha"
                    register={register}
                    state={getFieldState('password_confirmation')}
                    errors={errors.password_confirmation}
                    Icon={padlock}
                    darkMode
                  />
                  <FormErrorMessage>
                    {errors.password_confirmation &&
                      errors.password_confirmation.message}
                  </FormErrorMessage>
                </FormControl>
              </Box>
            </Box>

            <Button
              size="md"
              label="Login"
              disabled={isSubmitting}
              loading={isLoading}
              type="submit"
            />
          </Form>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default DesktopSetNewPassword;
