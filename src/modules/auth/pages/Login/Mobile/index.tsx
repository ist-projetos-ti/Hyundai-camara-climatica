import React, { useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { FormControl, useDisclosure } from '@chakra-ui/react';

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
import themeDefaults from '@style/themeDefaults';
import {
  Container,
  Content,
  Form,
  FormContainer,
  Title,
  StyledLink,
  StyledFormErrorMessage,
} from './styles';
import { LoginFormData, loginFormResolver } from '../loginForm.zod';

const MobileLoginPage: React.FC = () => {
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
                color={themeDefaults.colors.white}
                darkMode
              />
              <StyledFormErrorMessage>
                {errors.hcm_code && errors.hcm_code.message}
              </StyledFormErrorMessage>
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
                color={themeDefaults.colors.white}
                darkMode
              />
              <StyledFormErrorMessage>
                {errors.password && errors.password.message}
              </StyledFormErrorMessage>
            </FormControl>
            <StyledLink>
              <button onClick={onOpen} type="button">
                Forgot your password?
              </button>
              <StyledModal
                isOpen={isOpen}
                onClose={onClose}
                secondary
                isMobile
              />
            </StyledLink>
            <Button
              size="sm"
              label="Login"
              disabled={isSubmitting}
              loading={isLoading}
              type="submit"
              color={themeDefaults.colors.primary}
              backgroundColor={themeDefaults.colors.white}
              height="30px"
              borderRadius={7}
            />
          </Form>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default MobileLoginPage;
