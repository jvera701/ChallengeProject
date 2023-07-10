import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { scaleSize } from '../../core/constants';
interface Styles {
  container: ViewStyle;
  circle: ViewStyle;
  numberStyle: TextStyle;
  imageStyle: ImageStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: scaleSize(10),
    borderBottomWidth: scaleSize(1),
    borderBottomColor: 'gray',
  },
  circle: {
    height: scaleSize(40),
    width: scaleSize(40),
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaleSize(40 / 2),
  },
  numberStyle: {
    color: 'white',
    fontSize: scaleSize(16),
  },
  imageStyle: {
    width: scaleSize(70),
    height: scaleSize(100),
    resizeMode: 'contain',
    marginLeft: scaleSize(30),
  },
});
export default styles;
