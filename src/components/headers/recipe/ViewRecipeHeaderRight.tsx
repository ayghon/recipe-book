import { XStack } from 'tamagui';

import { DeleteButton } from './components/DeleteButton';
import { EditButton } from './components/EditButton';

export const ViewRecipeHeaderRight = () => {
  return (
    <XStack columnGap={4}>
      <EditButton />
      <DeleteButton />
    </XStack>
  );
};
