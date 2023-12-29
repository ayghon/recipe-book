import { FC } from 'react';
import { useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { SelectInput, SelectItem } from './SelectInput';
import { validationError } from '../fields.utils';

type SelectFieldProps = {
  name: string;
  placeholder?: string;
  label?: string;
  isRequired?: boolean;
  items: SelectItem[];
};

export const SelectField: FC<SelectFieldProps> = ({
  name,
  placeholder,
  items,
  label,
  isRequired,
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
    <SelectInput
      {...field}
      inputRef={ref}
      placeholder={placeholder}
      label={label}
      error={fieldState.error?.message}
      isRequired={isRequired}
      items={items}
    />
  );
};
