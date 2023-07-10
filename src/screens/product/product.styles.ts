import { ViewStyle, StyleSheet, TextStyle, ImageStyle } from 'react-native';
import { scaleSize } from '../../core/constants';

interface Styles {
  container: ViewStyle;
  mainView: ViewStyle;
  circle: ViewStyle;
  numberStyle: TextStyle;
  imageStyle: ImageStyle;
  bottomRow: ViewStyle;
  boldedText: TextStyle;
  purplePrice: TextStyle;
  button: ViewStyle;
  minusButtonColor: ViewStyle;
  plusButtonColor: ViewStyle;
  buttonText: TextStyle;
  minusTextColor: TextStyle;
  plusTextColor: TextStyle;
  grayBottomText: TextStyle;
  purpleLine: ViewStyle;
  bottomButton: ViewStyle;
  saveText: TextStyle;
  purpleDot: ViewStyle;
  purpleDotContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    margin: scaleSize(10),
    backgroundColor: 'white',
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'center',
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
    width: scaleSize(130),
    maxHeight: scaleSize(200),
    resizeMode: 'contain',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: scaleSize(10),
    paddingBottom: scaleSize(8),
    borderBottomColor: 'purple',
    borderBottomWidth: scaleSize(1),
  },
  boldedText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: scaleSize(18),
  },
  purplePrice: {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: scaleSize(18),
  },
  button: {
    width: scaleSize(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  minusButtonColor: {
    backgroundColor: '#ebe6e6',
  },
  plusButtonColor: {
    backgroundColor: 'purple',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: scaleSize(20),
  },
  minusTextColor: {
    color: 'black',
  },
  plusTextColor: {
    color: 'white',
  },
  grayBottomText: {
    color: 'gray',
    fontSize: scaleSize(16),
    paddingVertical: scaleSize(5),
  },
  purpleLine: {
    width: '100%',
    height: scaleSize(1),
    backgroundColor: 'purple',
  },
  bottomButton: {
    backgroundColor: 'purple',
    width: scaleSize(200),
    padding: scaleSize(5),
    marginTop: scaleSize(10),
    borderRadius: scaleSize(4),
    alignItems: 'center',
  },
  saveText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: scaleSize(20),
  },
  purpleDot: {
    backgroundColor: '#fab3ff',
    height: scaleSize(6),
    width: scaleSize(6),
    borderRadius: scaleSize(6 / 2),
  },
  purpleDotContainer: {
    width: scaleSize(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
