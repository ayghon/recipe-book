import React, { FC, ReactNode, Ref } from 'react';
import { TextInput as RNTextInput } from 'react-native';

import { TextInput } from '../text';

export type NumberInputProps = {
  onChange: (value?: string) => void;
  value?: string;
  placeholder?: string;
  label?: string;
  error?: string;
  autoFocus?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  inputRef?: Ref<RNTextInput>;
  isRequired?: boolean;
};

export const parseText = (text: string): number | null => {
  const parsedValue = parseFloat(text);

  if (isNaN(parsedValue)) {
    return null;
  }

  return parsedValue;
};

export const NumberInput: FC<NumberInputProps> = ({
  label,
  autoFocus = false,
  startIcon,
  endIcon,
  error,
  value,
  onChange,
  placeholder,
  isRequired,
}) => {
  return (
    <TextInput
      autoCapitalize="none"
      autoFocus={autoFocus}
      isRequired={isRequired}
      error={error}
      keyboardType="numeric"
      label={label}
      startIcon={startIcon}
      maxLength={10}
      onChange={onChange}
      placeholder={placeholder}
      endIcon={endIcon}
      value={value?.toString()}
    />
  );
};
