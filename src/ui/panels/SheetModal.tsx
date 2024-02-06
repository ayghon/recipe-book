import { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Sheet } from 'tamagui';

type SheetModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const SheetModal: FC<PropsWithChildren<SheetModalProps>> = ({
  isOpen,
  setIsOpen,
  children,
}) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <Sheet
      forceRemoveScrollEnabled={isOpen}
      modal
      open={isOpen}
      onOpenChange={setIsOpen}
      snapPointsMode="fit"
      dismissOnSnapToBottom
      zIndex={100_000}
      animation="medium"
    >
      <Sheet.Overlay />
      <Sheet.Handle />
      <Sheet.Frame paddingBottom={bottom + 16} paddingTop={16} paddingHorizontal={16}>
        {children}
      </Sheet.Frame>
    </Sheet>
  );
};
