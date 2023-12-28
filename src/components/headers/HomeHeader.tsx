import { HeaderTitle } from '@react-navigation/elements';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, XStack } from 'tamagui';

import { RootStackHeaderRight } from './RootStackHeaderRight';

export const HomeHeader = (props: NativeStackHeaderProps) => {
  const {
    options: { title = '' },
  } = props;
  const { top } = useSafeAreaInsets();

  return (
    <XStack alignItems="center" height={40} marginTop={top}>
      <View width={Dimensions.get('window').width / 3} />
      <View width={Dimensions.get('window').width / 3} alignItems="center">
        <HeaderTitle>{title}</HeaderTitle>
      </View>
      <View
        alignItems="flex-end"
        justifyContent="center"
        width={Dimensions.get('window').width / 3}
      >
        <RootStackHeaderRight />
      </View>
    </XStack>
  );
};
