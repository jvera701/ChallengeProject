import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import styles from './product.styles';

type ProductScreenProps = {
  navigation: any;
  route: any;
};

const ProductScreen = (props: ProductScreenProps) => {
  const { navigation, route } = props;
  const { index } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Text>{'Hello'}</Text>
      <Text onPress={() => navigation.goBack()}>{`Go back ${index}`}</Text>
    </SafeAreaView>
  );
};

export default ProductScreen;
