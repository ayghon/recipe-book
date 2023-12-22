import { AppProvider } from '@providers';
import { Slot } from 'expo-router';

export default function RootLayout() {
  return (
    <AppProvider>
      <Slot />
    </AppProvider>
  );
}
