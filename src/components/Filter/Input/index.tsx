/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

import { Container, InputComponent } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register: UseFormRegister<any>;
  errors?: FieldError;
  inputWidth?: 'date' | 'year' | 'numeric';
  maxLength: number;
}

const Input: React.FC<InputProps> = ({
  name,
  register,
  errors,
  type,
  maxLength,
  inputWidth,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [value, setValue] = useState('');
  const { ref, ...registerRest } = register(name);

  useEffect(() => {
    if (isFocused) inputRef.current?.focus();
  }, [isFocused]);

  return (
    <Container
      isError={!!errors}
      onClick={() => setIsFocused(true)}
      inputWidth={inputWidth}
    >
      <InputComponent
        {...rest}
        {...registerRest}
        ref={(curr) => {
          ref(curr);
          inputRef.current = curr;
        }}
        value={value}
        onChange={(e) => {
          const newValue = e.target.value;
          if (/^\d*$/.test(newValue)) {
            setValue(newValue);
          }
        }}
        onBlur={() => setIsFocused(false)}
        type={type}
        maxLength={maxLength}
      />
    </Container>
  );
};

export default Input;
