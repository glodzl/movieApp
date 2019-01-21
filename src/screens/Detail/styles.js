import { StyleSheet } from 'react-native';
import colors from '../../themes/colors';
import { scale } from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flex: 1,
    backgroundColor: colors.base,
    zIndex: 1,
  },
  headerContainer: {
    position: 'absolute',
    flex: 0,
    zIndex: 2,
    height: scale(200),
    width: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerPlaceholder: {
    flex: 0,
    height: scale(200),
    width: '100%',
    marginTop: scale(10),
  },
  headerBackground: {
    position: 'absolute',
    top: -5,
    flex: 0,
    height: scale(200),
    width: '100%',
    backgroundColor: colors.black,
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  headerImage: {
    height: scale(200),
    width: '100%',
    resizeMode: 'cover',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: scale(16),
    marginHorizontal: scale(5),
    color: colors.white,
  },
  headerButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: scale(10),
    left: scale(10),
    right: scale(13),
  },
  mainContainer: {
    marginHorizontal: scale(15),
  },
  subContainer: {
    flexDirection: 'row',
    marginBottom: scale(30),
  },
  image: {
    height: scale(180),
    width: scale(120),
    resizeMode: 'cover',
  },
  title: {
    fontFamily: 'Roboto-Bold',
    color: colors.almostBlack,
    fontSize: scale(18),
    marginBottom: scale(10),
  },
  genre: {
    fontFamily: 'Roboto-Light',
    color: colors.darkGrey,
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
    width: scale(320),
    marginBottom: scale(80),
    alignSelf: 'center',
  },
  overview: {
    fontFamily: 'Roboto',
    fontSize: scale(14),
    color: colors.darkGrey,
    marginBottom: scale(40),
  },
});
