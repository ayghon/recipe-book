import { config } from '@tamagui/config/v2';
import { createTamagui, createTokens } from 'tamagui';

const tokens = createTokens({
  ...config.tokens,
  color: {
    ...config.tokens.color,
    primary: '#009688',
    primaryLight: '#00c9b1',
  },
});

const tamaguiConfig = createTamagui({
  ...config,
  tokens,
});

type Conf = typeof tamaguiConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
export default tamaguiConfig;
