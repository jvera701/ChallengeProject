import React from 'react';
import { ImageBackground, View, Text, Image, Pressable } from 'react-native';
import styles from './item.styles';
import { images, ImageList, scaleSize } from '../../core/constants';

type ItemProps = {
  name: ImageList;
  quantity?: number;
  onPress: () => void;
};

const Item = (props: ItemProps) => {
  const { name, quantity, onPress } = props;
  const findImage = images.find(image => image.name === name);
  const { width, height } = Image.resolveAssetSource(findImage?.source);
  const ratio = height / width;
  const dimensions = {
    width: scaleSize(160),
    height: scaleSize(160) * ratio,
  };

  return (
    <Pressable onPress={onPress} style={[dimensions, styles.container]}>
      <View
        style={[
          styles.innerContainer,
          quantity !== undefined ? styles.purpleBorder : styles.grayBorder,
          dimensions,
        ]}
      >
        <ImageBackground source={findImage?.source} style={[styles.image]}>
          {quantity !== undefined && (
            <View style={styles.circle}>
              <Text style={styles.numberStyle}>{quantity}</Text>
            </View>
          )}
        </ImageBackground>
      </View>
    </Pressable>
  );
};
export default Item;
