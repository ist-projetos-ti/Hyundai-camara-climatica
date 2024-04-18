import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { Spinner } from '@chakra-ui/react';

import themeDefaults from '@style/themeDefaults';
import { Container, Label, LabelContainer } from './styles';
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
  children?: ReactNode;
  height?: string;
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
  children,
  height,

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
      height={height}
    >
      {loading ? (
        <Spinner size="xs" color={themeDefaults.colors.primary} />
      ) : (
        <LabelContainer>
          {children}
          <Label>{label}</Label>
        </LabelContainer>
      )}
    </Container>
  </LinkWrapper>
);

export default Button;
