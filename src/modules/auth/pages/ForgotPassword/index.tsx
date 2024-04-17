import React, { useCallback, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaUser } from 'react-icons/fa';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';

import { usePassword } from '@modules/users/hooks/Password';
import Input from '@components/Form/Input';
import { PublicPathsEnum } from '@routes/publicRoutes/publicPaths';

import Button from '../../../../components/Button';
import { Container, Content, Form, FormContainer } from './styles';
import {
  ForgotPasswordFormData,
  forgotPasswordResolver,
} from './forgotPasswordForm.zod';

const ForgotPassword: React.FC = () => {
  const {
    getFieldState,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormData>({
    resolver: forgotPasswordResolver,
    mode: 'all',
  });

  const [isLoading, setIsLoading] = useState(false);
  const { SendForgotPasswordCode } = usePassword();
  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
      try {
        setIsLoading(true);

        // Set delay to smooth loading

        await new Promise((r) => {
          setTimeout(r, 1000);
        });

        await SendForgotPasswordCode(data.email);

        navigate(PublicPathsEnum.LOGIN);
        setIsLoading(false);
      } catch {
        setIsLoading(false);
      }
    },
    [SendForgotPasswordCode, navigate]
  );

  useEffect(() => {
    document.title = 'Esqueci a senha';
  }, []);

  return (
    <Container>
      <Content>
        <FormContainer>
          <Link to={PublicPathsEnum.LOGIN}>Voltar para o login</Link>
          <Form onSubmit={handleSubmit(onSubmit)}>
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
            <Button
              size="md"
              label="Enviar"
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

export default ForgotPassword;
