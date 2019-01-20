import { Platform, StyleSheet } from 'react-native';
import colors from '../../themes/colors';
import { scale } from '../../utils';

export default StyleSheet.create({
  shadowContainer: {
    margin: Platform.OS === 'android' ? scale(5) : 0,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    borderRadius: scale(10),
    shadowColor: colors.black,
    shadowOffset: { width: scale(2), height: scale(3) },
    shadowRadius: scale(5),
    shadowOpacity: 0.21,
    elevation: scale(3),
  },
  container: {
    margin: Platform.OS === 'ios' ? scale(5) : 0,
    overflow: Platform.OS === 'ios' ? 'hidden' : 'visible',
    borderRadius: scale(10),
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  image: {
    height: scale(200),
    resizeMode: 'cover',
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scale(10),
  },
  ratingText: {
    fontFamily: 'Roboto',
    color: colors.darkGrey,
  },
});
