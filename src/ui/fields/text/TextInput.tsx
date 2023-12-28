import { FC, ReactNode, Ref } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { Input, InputProps, Text, useTheme, View, XStack, YStack } from 'tamagui';

type TextInputProps = Omit<InputProps, 'onChange' | 'onChangeText' | 'ref'> & {
  onChange: (text: string) => void;
  label?: string;
  error?: string;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  isRequired?: boolean;
  inputRef?: Ref<RNTextInput>;
};

export const TextInput: FC<TextInputProps> = ({
  onChange,
  value,
  label,
  error,
  placeholder,
  endIcon,
  startIcon,
  autoFocus,
  isRequired,
  inputRef,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <YStack rowGap={14}>
      {label && (
        <Text fontSize={16} fontWeight="800">
          {label}
          {isRequired && '*'}
        </Text>
      )}
      <XStack
        borderBottomEndRadius={0}
        borderBottomStartRadius={0}
        borderTopLeftRadius={5}
        borderTopRightRadius={5}
        columnGap={4}
        borderBottomWidth={1}
        borderBottomColor={theme.color9.val}
        justifyContent="space-between"
      >
        {startIcon && (
          <View paddingStart={8} justifyContent="center">
            {startIcon}
          </View>
        )}
        <Input
          ref={inputRef}
          selectionColor={theme.blue8.val}
          outlineStyle="none"
          flex={1}
          borderWidth={0}
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          autoFocus={autoFocus}
          {...rest}
        />
        {endIcon && (
          <View paddingEnd={8} justifyContent="center">
            {endIcon}
          </View>
        )}
      </XStack>
      <Text height={18} fontSize={14} color={theme.red9.val}>
        {error}
      </Text>
    </YStack>
  );
};
