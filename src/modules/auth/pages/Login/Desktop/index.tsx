import React, { useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { FormControl, FormErrorMessage, useDisclosure } from '@chakra-ui/react';

// eslint-disable-next-line import/no-unresolved
import { useToast } from '@hooks/Toast';
import { errorHandler } from '@errors/errorHandler';
import Input from '@components/Form/Input';
import { PrivatePathsEnum } from '@routes/privateRoutes/privatePaths';
import { useAuth } from '@modules/auth/hooks/auth';
import userIcon from '@assets/userIcon.svg?react';

import padlock from '@assets/padlock.svg?react';

import StyledModal from '@modules/auth/components/modal';

import Button from '@components/Button';
import {
  Container,
  Content,
  Form,
  FormContainer,
  Title,
  StyledLink,
} from './styles';
import { LoginFormData, loginFormResolver } from '../loginForm.zod';

const DesktopLoginPage: React.FC = () => {
  const {
    getFieldState,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: loginFormResolver,
    mode: 'all',
  });

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { signIn } = useAuth();
  const { addToast } = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSubmit = useCallback(
    async (data: LoginFormData) => {
      try {
        setIsLoading(true);

        // Set delay to smooth loading

        await new Promise((r) => {
          setTimeout(r, 1000);
        });

        const user = await signIn(data);

        if (user.reset_password) {
          navigate(PrivatePathsEnum.NEW_PASSWORD);
        } else {
          navigate(PrivatePathsEnum.HOME);
        }

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
    [addToast, navigate, signIn]
  );

  useEffect(() => {
    document.title = 'Login';
  }, []);

  return (
    <Container>
      <Content>
        <Title>Welcome</Title>
        <FormContainer>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.hcm_code}>
              <Input
                register={register}
                name="hcm_code"
                state={getFieldState('hcm_code')}
                placeholder="HCM user"
                errors={errors.hcm_code}
                Icon={userIcon}
              />
              <FormErrorMessage>
                {errors.hcm_code && errors.hcm_code.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.password}>
              <Input
                name="password"
                type="password"
                isPassword
                placeholder="Password"
                register={register}
                state={getFieldState('password')}
                errors={errors.password}
                Icon={padlock}
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <StyledLink>
              <button onClick={onOpen} type="button">
                Forgot your password?
              </button>
              <StyledModal isOpen={isOpen} onClose={onClose} />
            </StyledLink>
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

export default DesktopLoginPage;
