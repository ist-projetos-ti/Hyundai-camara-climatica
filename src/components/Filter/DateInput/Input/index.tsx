/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

import { Container, InputComponent } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register: UseFormRegister<any>;
  errors?: FieldError;
  variety?: boolean;
}

const Input: React.FC<InputProps> = ({
  name,
  register,
  errors,
  type,
  variety,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { ref, ...registerRest } = register(name);

  useEffect(() => {
    if (isFocused) inputRef.current?.focus();
  }, [isFocused]);

  return (
    <Container
      isError={!!errors}
      onClick={() => setIsFocused(true)}
      variety={variety}
    >
      <InputComponent
        {...rest}
        {...registerRest}
        ref={(curr) => {
          ref(curr);
          inputRef.current = curr;
        }}
        onBlur={() => setIsFocused(false)}
        type={type}
      />
    </Container>
  );
};

export default Input;
