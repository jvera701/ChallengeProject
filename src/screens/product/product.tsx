import React from 'react';
import { SafeAreaView, View, Text, Image, Pressable } from 'react-native';
import styles from './product.styles';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { Title } from '../../components/index';
import { images } from '../../core/constants';
import { changeAmount } from '../../store/listSlice';

type ProductScreenProps = {
  navigation: any;
  route: any;
};

const ProductScreen = (props: ProductScreenProps) => {
  const { navigation, route } = props;
  const { index } = route.params;
  const { list } = useAppSelector(state => state.list);
  const product = list[index];
  const findImage = images.find(image => image.name === product.name);
  const [quantity, setQuantity] = React.useState(product.quantity);
  const dispatch = useAppDispatch();
  const saveAndGoBack = () => {
    dispatch(changeAmount({ index, quantity }));
    navigation.goBack();
  };

  const reduceQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < 99) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title name="Product" useMaxHeight={true} />
      <View style={styles.mainView}>
        {quantity !== 0 && (
          <View style={styles.circle}>
            <Text style={styles.numberStyle}>{quantity}</Text>
          </View>
        )}

        <Image source={findImage?.source} style={styles.imageStyle} />
      </View>
      <View style={styles.bottomRow}>
        <View style={styles.mainView}>
          <Text style={styles.boldedText}>{product.name}</Text>
          <View style={styles.purpleDotContainer}>
            <View style={styles.purpleDot} />
          </View>
          <Text style={styles.purplePrice}>{`$${
            quantity * product.price
          }`}</Text>
        </View>
        <View style={styles.mainView}>
          <Pressable
            style={[styles.button, styles.minusButtonColor]}
            onPress={() => reduceQuantity()}
          >
            <Text style={[styles.buttonText, styles.minusButtonColor]}>
              {'-'}
            </Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.plusButtonColor]}
            onPress={() => increaseQuantity()}
          >
            <Text style={[styles.buttonText, styles.plusTextColor]}>{'+'}</Text>
          </Pressable>
        </View>
      </View>
      <Text style={styles.grayBottomText}>{product.description}</Text>
      <View style={styles.purpleLine} />
      <Pressable onPress={() => saveAndGoBack()} style={styles.bottomButton}>
        <Text style={styles.saveText}>{'Save and go back'}</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ProductScreen;
