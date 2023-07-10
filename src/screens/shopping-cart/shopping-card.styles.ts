import { ViewStyle, StyleSheet, TextStyle } from 'react-native';
import { scaleSize } from '../../core/constants';

interface Styles {
  container: ViewStyle;
  totalContainer: ViewStyle;
  buttonContainer: ViewStyle;
  grayText: TextStyle;
  purpleText: TextStyle;
  payText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    margin: scaleSize(10),
    backgroundColor: 'white',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: scaleSize(20),
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: 'blue',
    width: scaleSize(120),
    padding: scaleSize(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaleSize(3),
  },
  payText: {
    color: 'white',
    fontSize: scaleSize(18),
  },
  grayText: {
    color: 'gray',
    fontSize: scaleSize(24),
  },
  purpleText: {
    color: 'purple',
    fontSize: scaleSize(24),
    fontWeight: 'bold',
  },
});
export default styles;
