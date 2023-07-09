import { ViewStyle, StyleSheet } from 'react-native';
import { scaleSize } from './src/core/constants';
interface Styles {
  container: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    margin: scaleSize(10),
  },
});

export default styles;
