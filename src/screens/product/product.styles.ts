import { ViewStyle, StyleSheet } from 'react-native';
import { scaleSize } from '../../core/constants';

interface Styles {
  container: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: scaleSize(10),
    backgroundColor: 'white',
  },
});
export default styles;
