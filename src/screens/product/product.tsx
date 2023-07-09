import React from 'react';
import { Text, View } from 'react-native';
import styles from './product.styles';

type ProductScreenProps = {
  navigation: any;
};

const ProductScreen = (props: ProductScreenProps) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text>{'Hello'}</Text>
      <Text onPress={() => navigation.goBack()}>{'Go back'}</Text>
    </View>
  );
};

export default ProductScreen;
