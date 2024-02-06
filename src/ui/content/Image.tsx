import { Image as EXImage, ImageProps as EXImageProps } from 'expo-image';
import { FC } from 'react';
import { ColorValue, DimensionValue } from 'react-native';

type ImageProps = EXImageProps & {
  backgroundColor?: ColorValue;
  height: DimensionValue;
  width: DimensionValue;
  rounded?: boolean;
};

const blurHash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export const Image: FC<ImageProps> = ({
  backgroundColor,
  rounded = false,
  height,
  width,
  ...props
}) => {
  return (
    <EXImage
      style={{ backgroundColor, borderRadius: rounded ? 5 : 0, height, width }}
      contentFit="cover"
      placeholder={blurHash}
      {...props}
    />
  );
};
