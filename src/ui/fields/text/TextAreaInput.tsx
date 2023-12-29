import { FC, Ref } from 'react';
import { TextInput } from 'react-native';
import { Text, TextArea, YStack, TextAreaProps, useTheme } from 'tamagui';

type TextAreaInputProps = Omit<TextAreaProps, 'onChange' | 'onChangeText' | 'ref'> & {
  label?: string;
  isRequired?: boolean;
  onChange: (text: string) => void;
  error?: string;
  inputRef?: Ref<TextInput>;
};

export const TextAreaInput: FC<TextAreaInputProps> = ({
  autoFocus,
  label,
  inputRef,
  onChange,
  value,
  placeholder,
  isRequired,
  error,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <YStack rowGap={14} flex={1}>
      {label && (
        <Text fontSize={16} fontWeight="800">
          {label}
          {isRequired && '*'}
        </Text>
      )}
      <TextArea
        size="$4"
        borderWidth={2}
        borderRadius="$2"
        ref={inputRef}
        selectionColor="grey"
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        autoFocus={autoFocus}
        {...rest}
      />
      <Text height={18} fontSize={14} color={theme.red9.val}>
        {error}
      </Text>
    </YStack>
  );
};
