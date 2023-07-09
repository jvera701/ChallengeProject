import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import styles from './product.styles';

type ProductScreenProps = {
  navigation: any;
};

const ProductScreen = (props: ProductScreenProps) => {
  const { navigation } = props;
  return (
    <SafeAreaView style={styles.container}>
      <Text>{'Hello'}</Text>
      <Text onPress={() => navigation.goBack()}>{'Go back'}</Text>
    </SafeAreaView>
  );
};

export default ProductScreen;
