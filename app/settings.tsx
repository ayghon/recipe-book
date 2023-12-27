import { StorageKeys } from '@constants';
import { i18nKeys, Language } from '@i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ContentContainer, ListItemButton, SheetModal } from '@ui';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, useTheme, View } from 'tamagui';

export default function SettingsScreen() {
  const [t, { language, changeLanguage }] = useTranslation();
  const languageText = t(i18nKeys.language[language as keyof typeof i18nKeys.language]);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const theme = useTheme();

  const handleLanguagePress = async (value: string) => {
    await changeLanguage(value);
    await AsyncStorage.setItem(StorageKeys.Language, value);
    setIsLanguageModalOpen(false);
  };

  return (
    <ContentContainer>
      <ListItemButton onPress={() => setIsLanguageModalOpen(true)} endLabel={languageText}>
        {t(i18nKeys.settings.language.label)}
      </ListItemButton>

      {/* CHANGE LANGUAGE */}
      <SheetModal isOpen={isLanguageModalOpen} setIsOpen={setIsLanguageModalOpen}>
        <View justifyContent="center" alignItems="center" rowGap={32}>
          <Text
            color={language === Language.En ? theme.blue8.val : undefined}
            fontSize={16}
            onPress={() => handleLanguagePress(Language.En)}
          >
            {t(i18nKeys.language.en)}
          </Text>
          <Text
            color={language === Language.Fr ? theme.blue8.val : undefined}
            fontSize={16}
            onPress={() => handleLanguagePress(Language.Fr)}
          >
            {t(i18nKeys.language.fr)}
          </Text>
        </View>
      </SheetModal>
    </ContentContainer>
  );
}
