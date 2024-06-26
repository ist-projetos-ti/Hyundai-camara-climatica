/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

import { Container, InputComponent } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register: UseFormRegister<any>;
  errors?: FieldError;
  inputWidth?: 'date' | 'year' | 'numeric';
  maxLength?: number;
  nextInput?: string;
  setFocus?: any;
  setValue: any;
}

const Input: React.FC<InputProps> = ({
  name,
  register,
  errors,
  type,
  inputWidth,
  nextInput,
  maxLength = 1,
  setFocus,
  setValue,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { onChange: registerOnChange, ref, ...registerRest } = register(name);

  useEffect(() => {
    if (isFocused) inputRef.current?.focus();
  }, [isFocused]);

  const combineOnChange = (event: any) => {
    if (registerOnChange) {
      registerOnChange(event);
    }

    const sanitizedValue = event.target.value.replace(/\D/g, '');
    setValue(name, sanitizedValue);

    if (setFocus && nextInput) {
      if (event.target.value.length === maxLength) setFocus(nextInput);
    }
  };

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
        onChange={combineOnChange}
        onBlur={() => setIsFocused(false)}
        type={type}
        maxLength={maxLength}
      />
    </Container>
  );
};

export default Input;
