import React from 'react';
import { Text, View, Pressable } from 'react-native';
import styles from './title.styles';

type TitleProps = {
  name: string;
  totalCost?: number;
  useMaxHeight?: boolean;
  onPress?: () => void;
};

const Title = (props: TitleProps) => {
  const { name, totalCost, useMaxHeight = false, onPress } = props;
  return (
    <View style={[styles.container, useMaxHeight && styles.giveMaxHeight]}>
      <View style={styles.topView}>
        <Text style={styles.title}>{name}</Text>
        {totalCost !== undefined && onPress !== undefined && (
          <Pressable
            style={styles.purpleButton}
            onPress={() => onPress()}
            testID="cost-button"
          >
            <Text style={styles.innerText}>{`$${totalCost}`}</Text>
          </Pressable>
        )}
      </View>
      <View style={styles.purpleLine} />
    </View>
  );
};

export default Title;
