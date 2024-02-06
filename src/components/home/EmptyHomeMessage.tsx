import { MaterialIcons } from '@expo/vector-icons';
import { i18nKeys } from '@i18n';
import { useTranslation } from 'react-i18next';
import { getTokens, Text, useTheme } from 'tamagui';

export const EmptyHomeMessage = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Text
      textAlign="center"
      color={theme.gray11.val}
      fontSize={16}
      lineHeight={28}
      alignItems="center"
      alignSelf="center"
    >
      {t(i18nKeys.components.home.empty_list.message.part_1)}
      <MaterialIcons name="add" color={getTokens().color.textLight.val} size={24} />
      {t(i18nKeys.components.home.empty_list.message.part_2)}
    </Text>
  );
};
