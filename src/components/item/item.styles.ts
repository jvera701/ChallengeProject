import { StyleSheet, ImageStyle, ViewStyle, TextStyle } from 'react-native';
import { scaleSize } from '../../core/constants';
interface Styles {
  image: ImageStyle;
  grayBorder: ImageStyle;
  purpleBorder: ImageStyle;
  circle: ViewStyle;
  container: ViewStyle;
  numberStyle: TextStyle;
  innerContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  grayBorder: {
    borderColor: 'gray',
    borderWidth: scaleSize(2),
  },
  purpleBorder: {
    borderColor: 'purple',
    borderWidth: scaleSize(2),
  },
  circle: {
    height: scaleSize(40),
    width: scaleSize(40),
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaleSize(40 / 2),
  },
  container: {
    flex: 1,
  },
  numberStyle: {
    color: 'white',
    fontSize: scaleSize(14),
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: scaleSize(10),
    margin: scaleSize(5),
  },
});

export default styles;
