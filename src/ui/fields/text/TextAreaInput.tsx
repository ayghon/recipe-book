import { FC, Ref } from 'react';
import { TextInput } from 'react-native';
import { Text, TextArea, TextAreaProps, useTheme, View } from 'tamagui';

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
    <View rowGap={8} flex={1}>
      {label && (
        <Text fontSize={16} fontWeight="800">
          {label}
          {isRequired && '*'}
        </Text>
      )}
      <TextArea
        autoCorrect={false}
        size="$4"
        borderWidth={2}
        borderRadius={5}
        borderColor={error ? theme.red9.val : theme.color9.val}
        ref={inputRef}
        selectionColor="grey"
        onChangeText={onChange}
        value={value}
        textAlignVertical="top"
        placeholder={placeholder}
        autoFocus={autoFocus}
        {...rest}
      />
      <Text height={18} fontSize={14} color={theme.red9.val}>
        {error}
      </Text>
    </View>
  );
};
