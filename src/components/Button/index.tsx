import React, { ButtonHTMLAttributes } from 'react';
import { Spinner } from '@chakra-ui/react';

import themeDefaults from '@style/themeDefaults';
import { Container, Label } from './styles';
import LinkWrapper from './LinkWrapper';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  outlined?: boolean;
  alt?: boolean;
  disabled?: boolean;
  loading?: boolean;
  asLink?: boolean;
  to?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<IButtonProps> = ({
  label,
  outlined = false,
  alt = false,
  disabled = false,
  loading = false,
  asLink = false,
  size = 'md',
  to,
  ...rest
}) => (
  <LinkWrapper asLink={asLink} to={to || ''}>
    <Container
      type="submit"
      {...rest}
      $outlined={outlined}
      $alt={alt}
      disabled={disabled}
      $loading={loading}
      size={size}
    >
      {loading ? (
        <Spinner size="xs" color={themeDefaults.colors.primary} />
      ) : (
        <Label>{label}</Label>
      )}
    </Container>
  </LinkWrapper>
);

export default Button;
