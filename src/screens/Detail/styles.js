import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../config/colors';
import { scale } from '../../utils/scale';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.base,
  },
  mainContainer: {
    marginHorizontal: scale(15),
  },
  subContainer: {
    flexDirection: 'row',
    marginBottom: scale(20),
  },
  imageHeader: {
    height: scale(200),
    width,
    resizeMode: 'cover',
    marginBottom: scale(10),
    justifyContent: 'flex-end',
  },
  image: {
    height: scale(180),
    width: scale(120),
    resizeMode: 'cover',
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: scale(18),
    marginBottom: scale(10),
  },
  genre: {
    fontFamily: 'Roboto-Light',
    marginVertical: scale(5),
  },
  ratingText: {
    fontFamily: 'Roboto',
    color: colors.darkGrey,
    marginVertical: scale(5),
  },
  detailContainer: {
    flex: 1,
    marginLeft: scale(10),
    marginTop: scale(15),
  },
  detailSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scale(5),
  },
  detailText: {
    fontFamily: 'Roboto-Medium',
    color: colors.darkGrey,
    marginRight: scale(3),
  },
  youtube: {
    height: scale(200),
    width: scale(320),
    marginVertical: scale(25),
    alignSelf: 'center',
  },
  overview: {
    fontFamily: 'Roboto-Medium',
    color: colors.darkGrey,
  },
});
