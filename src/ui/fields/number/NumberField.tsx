import { FC } from 'react';
import { useController } from 'react-hook-form';

import { NumberInput } from './NumberInput';

type NumberFieldProps = {
  name: string;
  placeholder?: string;
  label?: string;
  isRequired?: boolean;
};

export const NumberField: FC<NumberFieldProps> = ({ name, placeholder, label, isRequired }) => {
  const {
    field: { ref, ...field },
    fieldState,
  } = useController({
    name,
  });

  return (
    <NumberInput
      {...field}
      inputRef={ref}
      placeholder={placeholder}
      label={label}
      error={fieldState.error?.message}
      isRequired={isRequired}
    />
  );
};
