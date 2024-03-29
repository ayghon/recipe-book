import { FC, Ref } from 'react';
import { Separator, Switch, TamaguiElement, Text, useTheme, XStack } from 'tamagui';

type SwitchInputProps = {
  onChange: (value: boolean) => void;
  value?: boolean;
  defaultChecked?: boolean;
  label?: string;
  isRequired?: boolean;
  inputRef?: Ref<TamaguiElement>;
};

export const SwitchInput: FC<SwitchInputProps> = ({
  inputRef,
  label,
  isRequired,
  defaultChecked,
  onChange,
  value,
}) => {
  const theme = useTheme();
  return (
    <XStack width={200} alignItems="center" gap={16}>
      {label && (
        <XStack columnGap={16}>
          <Text minWidth={90} justifyContent="flex-end" fontSize={16} fontWeight="800">
            {label}
            {isRequired && '*'}
          </Text>
          <Separator borderColor="$primaryLight" minHeight={20} vertical />
        </XStack>
      )}
      <Switch
        unstyled
        ref={inputRef}
        size="$4"
        backgroundColor={value ?? defaultChecked ? '$primaryLight' : theme.gray7.val}
        checked={value}
        onCheckedChange={onChange}
        defaultChecked={defaultChecked}
      >
        <Switch.Thumb backgroundColor="$primaryDark" animation="quick" />
      </Switch>
    </XStack>
  );
};
