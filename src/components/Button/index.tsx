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
  color?: string;
  backgroundColor?: string;
  borderRadius?: number;
  secondary?: boolean;
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
  color,
  backgroundColor,
  borderRadius,
  secondary,
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
      color={backgroundColor}
      borderRadius={borderRadius}
      secondary={secondary}
    >
      {loading ? (
        <Spinner size="xs" color={themeDefaults.colors.primary} />
      ) : (
        <LabelContainer>
          {children}
          <Label color={color}>{label}</Label>
        </LabelContainer>
      )}
    </Container>
  </LinkWrapper>
);

export default Button;
