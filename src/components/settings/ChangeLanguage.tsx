import { StorageKeys } from '@constants';
import { i18nKeys, Language } from '@i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ListItemButton, SheetModal } from '@ui';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';
import { Text, View } from 'tamagui';

export const ChangeLanguage = () => {
  const [t, { language, changeLanguage }] = useTranslation();
  const languageText = t(i18nKeys.language[language as keyof typeof i18nKeys.language]);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);

  const handleLanguagePress = async (value: string) => {
    try {
      await changeLanguage(value, (error) => {
        if (error) {
          throw new Error();
        }
      });
      await AsyncStorage.setItem(StorageKeys.Language, value);
      setIsLanguageModalOpen(false);
    } catch {
      Alert.alert(t(i18nKeys.common.error), t(i18nKeys.settings.language.alert.error.description));
      setIsLanguageModalOpen(false);
    }
  };

  return (
    <>
      <ListItemButton onPress={() => setIsLanguageModalOpen(true)} endLabel={languageText}>
        {t(i18nKeys.settings.language.label)}
      </ListItemButton>
      <SheetModal isOpen={isLanguageModalOpen} setIsOpen={setIsLanguageModalOpen}>
        <View justifyContent="center" alignItems="center" rowGap={32}>
          {Object.values(Language).map((lang) => (
            <Text
              key={lang}
              color={language === lang ? '$primary' : undefined}
              fontSize={16}
              onPress={() => handleLanguagePress(lang)}
            >
              {t(i18nKeys.language[lang])}
            </Text>
          ))}
        </View>
      </SheetModal>
    </>
  );
};
