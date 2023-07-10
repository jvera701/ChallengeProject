import { ViewStyle, StyleSheet, TextStyle } from 'react-native';
import { scaleSize } from '../../core/constants';
interface Styles {
  purpleLine: ViewStyle;
  title: TextStyle;
  topView: ViewStyle;
  purpleButton: ViewStyle;
  innerText: TextStyle;
  container: ViewStyle;
  giveMaxHeight: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  purpleLine: {
    width: '100%',
    height: scaleSize(1),
    backgroundColor: 'purple',
    marginTop: scaleSize(3),
    marginBottom: scaleSize(10),
  },
  title: {
    fontSize: scaleSize(24),
    color: 'purple',
    fontWeight: 'bold',
  },
  topView: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  purpleButton: {
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    padding: scaleSize(5),
    minWidth: scaleSize(50),
  },
  innerText: {
    color: 'white',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  giveMaxHeight: {
    maxHeight: scaleSize(40),
  },
});

export default styles;
