import { FC, ReactNode } from 'react';
import { useController } from 'react-hook-form';

import { TextInput } from './TextInput';

type TextFieldProps = {
  name: string;
  placeholder?: string;
  label?: string;
  endIcon?: ReactNode;
  autoFocus?: boolean;
  isRequired?: boolean;
};

export const TextField: FC<TextFieldProps> = ({
  name,
  endIcon,
  label,
  placeholder,
  autoFocus,
  isRequired = false,
}) => {
  const {
    field: { ref, ...field },
    fieldState,
  } = useController({
    name,
  });

  return (
    <TextInput
      {...field}
      inputRef={ref}
      placeholder={placeholder}
      label={label}
      endIcon={endIcon}
      error={fieldState.error?.message}
      autoFocus={autoFocus}
      isRequired={isRequired}
    />
  );
};
