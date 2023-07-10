import React from 'react';
//import { useAppSelector } from '../../store/hooks';
import styles from './shopping-card.styles';
import { SafeAreaView, FlatList, View, Text, Pressable } from 'react-native';
import { ShoppingItem, Title } from '../../components/index';
import { useAppSelector } from '../../store/hooks';
import { itemType } from 'src/store/initialState';

type ShoppingCartScreenProps = {
  navigation: any;
};

type itemData = {
  item: itemType;
};

const ShoppingCartScreen = (props: ShoppingCartScreenProps) => {
  const { navigation } = props;
  const { list } = useAppSelector(state => state.list);
  const newList = list.filter(element => element.quantity > 0);
  const totalSum = newList.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0,
  );

  const renderItem = (data: itemData) => {
    const { item } = data;
    return <ShoppingItem name={item.name} quantity={item.quantity} />;
  };

  const bottomTotal = () => {
    return (
      <View>
        <View style={styles.totalContainer}>
          <Text style={styles.grayText}>{'Total: '}</Text>
          <Text style={styles.purpleText}>{`$${totalSum}`}</Text>
        </View>
        <Pressable style={styles.buttonContainer}>
          <Text style={styles.payText}>{'Ir a wompi'}</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={newList}
        renderItem={renderItem}
        ListHeaderComponent={<Title name="Shopping Cart" />}
        ListFooterComponent={() => bottomTotal()}
      />
    </SafeAreaView>
  );
};

export default ShoppingCartScreen;
