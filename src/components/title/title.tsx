import React from 'react';
import { Text, View, Pressable } from 'react-native';
import styles from './title.styles';

type TitleProps = {
  name: string;
  totalCost?: number;
  useMaxHeight?: boolean;
};

const Title = (props: TitleProps) => {
  const { name, totalCost, useMaxHeight = false } = props;
  return (
    <View style={[styles.container, useMaxHeight && styles.giveMaxHeight]}>
      <View style={styles.topView}>
        <Text style={styles.title}>{name}</Text>
        {totalCost !== undefined && (
          <Pressable style={styles.purpleButton}>
            <Text style={styles.innerText}>{`$${totalCost}`}</Text>
          </Pressable>
        )}
      </View>
      <View style={styles.purpleLine} />
    </View>
  );
};

export default Title;
