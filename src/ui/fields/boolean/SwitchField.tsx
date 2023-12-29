import { FC } from 'react';
import { useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { SwitchInput } from './SwitchInput';

type SwitchFieldProps = {
  name: string;
  label?: string;
  isRequired?: boolean;
};

export const SwitchField: FC<SwitchFieldProps> = ({ name, isRequired, label }) => {
  const { t } = useTranslation();
  const {
    field: { ref, ...field },
  } = useController({
    name,
  });

  return <SwitchInput {...field} inputRef={ref} label={label} isRequired={isRequired} />;
};
