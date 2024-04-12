import { config } from '@tamagui/config/v2';
import { createTamagui, createTokens } from 'tamagui';

const tokens = createTokens({
  ...config.tokens,
  color: {
    ...config.tokens.color,
    background: '#EEEEEE',
    border: '#262626',
    card: '#171717',
    primary: '#3701F9',
    primaryDark: '#190482',
    primaryLight: '#8E8FFA',
    textDark: '#EDEDED',
    textLight: '#171717',
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
