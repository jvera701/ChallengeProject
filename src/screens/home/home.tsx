import React from 'react';
import Item from '../../components/item/item';
import { SafeAreaView, FlatList, Text, View, Pressable } from 'react-native';
import styles from './home.styles';
import { useAppSelector } from '../../store/hooks';
import { itemType } from 'src/store/initialState';

type HeroScreenProps = {
  navigation: any;
};

type itemData = {
  item: itemType;
};

const HomeScreen = (props: HeroScreenProps) => {
  const { navigation } = props;
  const { list } = useAppSelector(state => state.list);

  const renderItem = (itemData: itemData) => {
    const item = itemData.item;
    return (
      <Item
        name={item.name}
        onPress={() => {
          navigation.navigate('ProductScreen');
        }}
        quantity={item.quantity}
      />
    );
  };
  const getTopPart = () => {
    const totalSum = list.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price + currentValue.quantity,
      0,
    );
    return (
      <View>
        <View style={styles.topView}>
          <Text style={styles.title}>{'Store'}</Text>
          <Pressable style={styles.purpleButton}>
            <Text style={styles.innerText}>{`$${totalSum}`}</Text>
          </Pressable>
        </View>
        <View style={styles.purpleLine} />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list}
        numColumns={2}
        renderItem={renderItem}
        ListHeaderComponent={getTopPart()}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
