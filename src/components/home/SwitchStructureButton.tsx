import { MaterialIcons } from '@expo/vector-icons';
import { StructureType } from '@providers';
import { FC } from 'react';
import { getTokens, ToggleGroup } from 'tamagui';

export const SwitchStructureButton: FC<{
  value: StructureType;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  return (
    <ToggleGroup size="$2" disableDeactivation type="single" value={value} onValueChange={onChange}>
      <ToggleGroup.Item value={StructureType.Card}>
        <MaterialIcons name="view-stream" size={24} color={getTokens().color.textLight.val} />
      </ToggleGroup.Item>
      <ToggleGroup.Item value={StructureType.List}>
        <MaterialIcons name="view-list" size={24} color={getTokens().color.textLight.val} />
      </ToggleGroup.Item>
    </ToggleGroup>
  );
};
