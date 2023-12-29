import { MaterialIcons } from '@expo/vector-icons';
import { FC, Ref } from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Adapt, Select, Sheet, Text, useTheme, YStack } from 'tamagui';

export type SelectItem = {
  name: string;
  value: string;
};

type SelectInputProps = {
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  items: SelectItem[];
  inputRef?: Ref<TextInput>;
  label?: string;
  isRequired?: boolean;
  error?: string;
};

export const SelectInput: FC<SelectInputProps> = ({
  value,
  onChange,
  placeholder,
  items,
  label,
  isRequired,
  inputRef,
  error,
  ...rest
}) => {
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Select
      native
      value={value}
      defaultValue={value}
      onValueChange={onChange}
      disablePreventBodyScroll
    >
      <YStack flex={1} rowGap={14}>
        {label && (
          <Text fontSize={16} fontWeight="800">
            {label}
            {isRequired && '*'}
          </Text>
        )}
        <Select.Trigger
          borderColor={theme.gray10.val}
          borderRadius="$2"
          iconAfter={<MaterialIcons name="keyboard-arrow-down" size={24} />}
          ref={inputRef}
          {...rest}
        >
          <Select.Value placeholder={placeholder} />
        </Select.Trigger>
        <Text height={18} fontSize={14} color={theme.red9.val}>
          {error}
        </Text>
      </YStack>

      <Adapt when="sm" platform="touch">
        <Sheet
          native
          modal
          dismissOnSnapToBottom
          animationConfig={{
            damping: 20,
            mass: 1.2,
            stiffness: 250,
            type: 'spring',
          }}
        >
          <Sheet.Overlay />
          <Sheet.Frame height={100}>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
        </Sheet>
      </Adapt>

      <Select.Content zIndex={200000}>
        <Select.Viewport minWidth={200}>
          <Select.Group paddingTop="$4" paddingBottom={bottom}>
            {items.map((item, i) => {
              return (
                <Select.Item key={item.value} index={i} value={item.value}>
                  <Select.ItemText fontSize={16}>{t(item.name)}</Select.ItemText>
                  <Select.ItemIndicator marginLeft="auto">
                    <MaterialIcons name="check" size={24} />
                  </Select.ItemIndicator>
                </Select.Item>
              );
            })}
          </Select.Group>
        </Select.Viewport>
      </Select.Content>
    </Select>
  );
};
