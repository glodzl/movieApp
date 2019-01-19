import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import { scale } from '../../utils/scale';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginVertical: scale(10),
    marginHorizontal: scale(15),
    backgroundColor: colors.white,
    borderRadius: scale(10),
    shadowColor: colors.black,
    shadowOffset: { width: scale(2), height: scale(3) },
    shadowRadius: scale(5),
    shadowOpacity: 0.2,
    elevation: scale(3),
  },
  imageContainer: {
    borderTopLeftRadius: scale(10),
    borderBottomLeftRadius: scale(10),
    overflow: 'hidden',
  },
  image: {
    height: scale(200),
    width: scale(130),
    resizeMode: 'cover',
  },
  detailContainer: {
    flex: 1,
    marginHorizontal: scale(10),
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: scale(5),
  },
  title: {
    flex: 1,
    fontFamily: 'Roboto-Bold',
    color: colors.darkGrey,
    fontSize: scale(18),
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontFamily: 'Roboto-Medium',
    color: colors.darkGrey,
    marginHorizontal: scale(3),
  },
  genreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  genreText: {
    flex: 1,
    fontFamily: 'Roboto-Light',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    marginHorizontal: scale(3),
    fontFamily: 'Roboto-Light',
  },
  overview: {
    marginVertical: scale(10),
    fontFamily: 'Roboto',
    color: colors.darkGrey,
  },
  favourite: {
    position: 'absolute',
    bottom: scale(10),
    right: 0,
  },
});
