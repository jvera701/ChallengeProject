import React from 'react';
import Item from '../../components/item/item';
import { ImageList, ImageListData } from '../../core/constants';
import { SafeAreaView, FlatList, Text, View, Pressable } from 'react-native';
import styles from './home.styles';

type ItemType = {
  item: ImageList;
};

type HeroScreenProps = {
  navigation: any;
};

const HomeScreen = (props: HeroScreenProps) => {
  const { navigation } = props;
  const renderItem = (name: ItemType) => {
    return (
      <Item
        name={name.item}
        onPress={() => {
          navigation.navigate('ProductScreen');
        }}
      />
    );
  };
  const getTopPart = () => {
    return (
      <View>
        <View style={styles.topView}>
          <Text style={styles.title}>{'Store'}</Text>
          <Pressable style={styles.purpleButton}>
            <Text style={styles.innerText}>{'$0'}</Text>
          </Pressable>
        </View>
        <View style={styles.purpleLine} />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={ImageListData}
        numColumns={2}
        renderItem={renderItem}
        ListHeaderComponent={getTopPart()}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
