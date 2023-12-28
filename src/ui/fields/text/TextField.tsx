import { FC, ReactNode } from 'react';
import { useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { TextInput } from './TextInput';
import { validationError } from '../fields.utils';

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
  const { t } = useTranslation();

  const {
    field: { ref, ...field },
    fieldState,
  } = useController({
    name,
    rules: {
      required: isRequired && t(validationError.required),
    },
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
