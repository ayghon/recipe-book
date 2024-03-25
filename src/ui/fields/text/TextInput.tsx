import { FC, ReactNode, Ref } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { Input, InputProps, Text, useTheme, View, XStack } from 'tamagui';

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
    <View flex={1} rowGap={8}>
      {label && (
        <Text fontSize={16} fontWeight="800">
          {label}
          {isRequired && '*'}
        </Text>
      )}
      <XStack
        borderRadius={5}
        columnGap={4}
        borderWidth={2}
        borderColor={error ? theme.red9.val : theme.color9.val}
        justifyContent="space-between"
      >
        {startIcon && (
          <View paddingStart={8} justifyContent="center">
            {startIcon}
          </View>
        )}
        <Input
          autoCorrect={false}
          ref={inputRef}
          selectionColor="grey"
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
    </View>
  );
};
