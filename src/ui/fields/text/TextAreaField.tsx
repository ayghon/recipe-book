import { FC } from 'react';
import { useController } from 'react-hook-form';

import { TextAreaInput } from './TextAreaInput';

type TextAreaFieldProps = {
  name: string;
  placeholder?: string;
  label?: string;
  autoFocus?: boolean;
  isRequired?: boolean;
};

export const TextAreaField: FC<TextAreaFieldProps> = ({
  name,
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
    <TextAreaInput
      {...field}
      inputRef={ref}
      placeholder={placeholder}
      label={label}
      error={fieldState.error?.message}
      autoFocus={autoFocus}
      isRequired={isRequired}
    />
  );
};
