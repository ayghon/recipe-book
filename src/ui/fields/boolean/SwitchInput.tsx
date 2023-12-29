import { FC, Ref } from 'react';
import { Separator, Switch, Text, useTheme, XStack } from 'tamagui';

type SwitchInputProps = {
  onChange: (value: boolean) => void;
  value?: boolean;
  defaultChecked?: boolean;
  label?: string;
  isRequired?: boolean;
  inputRef?: Ref<typeof Switch>;
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
    <XStack width={200} alignItems="center" space="$4">
      {label && (
        <XStack columnGap="$4">
          <Text minWidth={90} justifyContent="flex-end" fontSize={16} fontWeight="800">
            {label}
            {isRequired && '*'}
          </Text>
          <Separator borderColor={theme.gray8.val} minHeight={20} vertical />
        </XStack>
      )}
      <Switch
        ref={inputRef}
        size="$4"
        backgroundColor={value ?? defaultChecked ? theme.blue7.val : theme.gray7.val}
        checked={value}
        onCheckedChange={onChange}
        defaultChecked={defaultChecked}
      >
        <Switch.Thumb backgroundColor={theme.blue10.val} animation="quick" />
      </Switch>
    </XStack>
  );
};
