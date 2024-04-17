import React, { useCallback, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import { PiLockKeyOpenThin } from 'react-icons/pi';
import { TfiUser } from 'react-icons/tfi';

// eslint-disable-next-line import/no-unresolved
import { useToast } from '@hooks/Toast';
import { errorHandler } from '@errors/errorHandler';
import Input from '@components/Form/Input';
import { PublicPathsEnum } from '@routes/publicRoutes/publicPaths';
import { PrivatePathsEnum } from '@routes/privateRoutes/privatePaths';
import { useAuth } from '@modules/auth/hooks/auth';

import Button from '../../../../components/Button';

import {
  Container,
  Content,
  Form,
  FormContainer,
  Title,
  StyledLink,
} from './styles';
import { LoginFormData, loginFormResolver } from './loginForm.zod';

const Login: React.FC = () => {
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

  const onSubmit = useCallback(
    async (data: LoginFormData) => {
      try {
        setIsLoading(true);

        // Set delay to smooth loading

        await new Promise((r) => {
          setTimeout(r, 1000);
        });

        await signIn(data);

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
                name="email"
                state={getFieldState('hcm_code')}
                placeholder="HCM user"
                errors={errors.hcm_code}
                Icon={TfiUser}
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
                Icon={PiLockKeyOpenThin}
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <StyledLink>
              <Link to={PublicPathsEnum.FORGOT_PASSWORD}>
                Forgot your password?
              </Link>
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

export default Login;
