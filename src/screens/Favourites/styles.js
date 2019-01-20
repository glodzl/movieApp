import { StyleSheet } from 'react-native';
import colors from '../../themes/colors';
import { scale } from '../../utils';

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
  emptyText: {
    fontFamily: 'Roboto',
    fontSize: scale(14),
    color: colors.darkGrey,
  },
});
