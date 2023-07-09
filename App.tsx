/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Item from './src/components/item/item';
import { WebView } from 'react-native-webview';
import { ImageList, ImageListData } from './src/core/constants';
import { SafeAreaView, FlatList } from 'react-native';
import styles from './App.styles';

type ItemType = {
  item: ImageList;
};

function App(): JSX.Element {
  const renderItem = (name: ItemType) => {
    return <Item name={name.item} onPress={() => {}} quantity={1} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={ImageListData} numColumns={2} renderItem={renderItem} />
    </SafeAreaView>
  );
}

export default App;
