import { ViewStyle, StyleSheet, TextStyle } from 'react-native';
import { scaleSize } from '../../core/constants';
interface Styles {
  container: ViewStyle;
  purpleLine: ViewStyle;
  title: TextStyle;
  topView: ViewStyle;
  purpleButton: ViewStyle;
  innerText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    margin: scaleSize(10),
    backgroundColor: 'white',
  },
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
});

export default styles;
