import React from 'react';
import styles from './shopping-item.styles';
import { View, Text, Image } from 'react-native';
import { ImageList, images } from '../../core/constants';

type ShoppingItemProps = {
  name: ImageList;
  quantity: number;
};

const ShoppingItem = (props: ShoppingItemProps) => {
  const { name, quantity } = props;
  const findImage = images.find(image => image.name === name);
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.numberStyle}>{quantity}</Text>
      </View>
      <Image source={findImage?.source} style={styles.imageStyle} />
    </View>
  );
};

export default ShoppingItem;
