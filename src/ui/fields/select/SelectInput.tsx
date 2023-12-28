import { MaterialIcons } from '@expo/vector-icons';
import { FC } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Adapt, Select, Sheet, useTheme } from 'tamagui';

export type SelectItem = {
  name: string;
};

type SelectInputProps = {
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  items: SelectItem[];
};

export const SelectInput: FC<SelectInputProps> = ({ value, onChange, placeholder, items }) => {
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <Select
      native
      value={value}
      defaultValue={value}
      onValueChange={onChange}
      disablePreventBodyScroll
      size="$4"
    >
      <Select.Trigger
        borderColor={theme.gray11.val}
        borderRadius={5}
        backgroundColor={theme.gray12.val}
        iconAfter={<MaterialIcons name="keyboard-arrow-down" size={24} color={theme.gray3.val} />}
      >
        <Select.Value color={theme.gray3.val} placeholder={placeholder} />
      </Select.Trigger>

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
          <Sheet.Frame height={100} backgroundColor="#000">
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
        </Sheet>
      </Adapt>

      <Select.Content zIndex={200000}>
        <Select.Viewport minWidth={200}>
          <Select.Group paddingTop={16} paddingBottom={bottom}>
            {items.map((item, i) => {
              return (
                <Select.Item backgroundColor="#000" key={item.name} index={i} value={item.name}>
                  <Select.ItemText fontSize={16} color={theme.gray3.val}>
                    {item.name}
                  </Select.ItemText>
                  <Select.ItemIndicator marginLeft="auto">
                    <MaterialIcons name="check" size={24} color={theme.gray3.val} />
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
