import React, { useCallback, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { FaKey, FaUser } from 'react-icons/fa';

// eslint-disable-next-line import/no-unresolved
import { useToast } from '@hooks/Toast';
import { errorHandler } from '@errors/errorHandler';
import Select from '@components/Form/Select';
import Input from '@components/Form/Input';
import { PublicPathsEnum } from '@routes/publicRoutes/publicPaths';
import logoImg from '@assets/logo.svg';
import { PrivatePathsEnum } from '@routes/privateRoutes/privatePaths';
import { useAuth } from '@modules/auth/hooks/auth';

import Button from '../../../../components/Button';

import { Container, Content, Form, FormContainer, LogoImg } from './styles';
import { LoginFormData, loginFormResolver } from './loginForm.zod';

const Login: React.FC = () => {
  const {
    getFieldState,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    control,
  } = useForm<LoginFormData>({
    resolver: loginFormResolver,
    mode: 'all',
  });

  const [isLoading, setIsLoading] = useState(false);

  const languages = ['pt_BR', 'en_US'];

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
        <LogoImg src={logoImg} alt="Logo" />

        <FormContainer>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.language}>
              <FormLabel htmlFor="language">Idioma:</FormLabel>
              <Select
                control={control}
                name="language"
                Icon={FaKey}
                options={languages}
                placeholder="Selecione uma opção"
              />
              <FormErrorMessage>
                {errors.language && errors.language.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.email}>
              <FormLabel htmlFor="email">E-mail:</FormLabel>
              <Input
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
            <FormControl isInvalid={!!errors.password}>
              <FormLabel htmlFor="password">Senha:</FormLabel>
              <Input
                name="password"
                type="password"
                isPassword
                placeholder="Insira a senha"
                register={register}
                state={getFieldState('password')}
                errors={errors.password}
                Icon={FaKey}
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <Link to={PublicPathsEnum.FORGOT_PASSWORD}>
              Esqueci minha senha
            </Link>
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
