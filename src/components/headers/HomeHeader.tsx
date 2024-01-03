import { HeaderTitle } from '@react-navigation/elements';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useWindowDimensions, View, XStack } from 'tamagui';

import { RootStackHeaderRight } from './RootStackHeaderRight';

export const HomeHeader = (props: NativeStackHeaderProps) => {
  const {
    options: { title = '' },
  } = props;
  const { top } = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  return (
    <XStack alignItems="center" height={40} marginTop={top}>
      <View width={width / 3} />
      <View width={width / 3} alignItems="center">
        <HeaderTitle>{title}</HeaderTitle>
      </View>
      <View alignItems="flex-end" justifyContent="center" width={width / 3}>
        <RootStackHeaderRight />
      </View>
    </XStack>
  );
};
