import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../themes/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.base,
  },
  list: {
    flex: 1,
    width: '100%',
  },
});
