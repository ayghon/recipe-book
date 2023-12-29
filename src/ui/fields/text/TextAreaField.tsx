import { FC } from 'react';
import { useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { TextAreaInput } from './TextAreaInput';
import { validationError } from '../fields.utils';

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
