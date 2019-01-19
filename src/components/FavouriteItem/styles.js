import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import { scale } from '../../utils/scale';

export default StyleSheet.create({
  shadowContainer: {
    shadowColor: colors.black,
    shadowOffset: { width: scale(2), height: scale(3) },
    shadowRadius: scale(5),
    shadowOpacity: 0.2,
    elevation: scale(3),
  },
  container: {
    borderRadius: scale(10),
    overflow: 'hidden',
    alignItems: 'center',
    margin: scale(5),
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
