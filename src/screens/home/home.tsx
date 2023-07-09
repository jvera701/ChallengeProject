import React from 'react';
import Item from '../../components/item/item';
import { SafeAreaView, FlatList } from 'react-native';
import styles from './home.styles';
import { useAppSelector } from '../../store/hooks';
import { itemType } from 'src/store/initialState';
import Title from '../../components/title/title';

type HeroScreenProps = {
  navigation: any;
};

type itemData = {
  index: number;
  item: itemType;
};

const HomeScreen = (props: HeroScreenProps) => {
  const { navigation } = props;
  const { list } = useAppSelector(state => state.list);
  const totalSum = list.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price + currentValue.quantity,
    0,
  );

  const renderItem = (itemData: itemData) => {
    const { item, index } = itemData;
    return (
      <Item
        name={item.name}
        onPress={() => {
          navigation.navigate('ProductScreen', { index: index });
        }}
        quantity={item.quantity}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list}
        numColumns={2}
        renderItem={renderItem}
        ListHeaderComponent={<Title name="Store" totalCost={totalSum} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
