import React, { FC, ReactNode } from 'react';

import { TextInput } from '../text';

export type NumberInputProps = {
  onChange: (value: number) => void;
  value?: number;
  placeholder?: string;
  label?: string;
  error?: string;
  autoFocus?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};

const parseText = (text: string): number | null => {
  const textRemoved = text.replace(/[^0-9]/g, '');
  const parsedValue = parseInt(textRemoved, 10);

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
}) => {
  const handleChange = (text: string) => {
    const parsedText = parseText(text);

    if (parsedText) {
      return onChange(parsedText);
    }
  };

  return (
    <TextInput
      autoCapitalize="none"
      autoFocus={autoFocus}
      error={error}
      keyboardType="numeric"
      label={label}
      startIcon={startIcon}
      maxLength={10}
      onChange={handleChange}
      placeholder={placeholder}
      endIcon={endIcon}
      value={value?.toFixed(0)}
    />
  );
};
