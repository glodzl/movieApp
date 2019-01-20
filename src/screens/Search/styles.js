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
  inputContainer: {
    flexDirection: 'row',
    marginHorizontal: scale(15),
    marginVertical: scale(10),
  },
  textInput: {
    width: '100%',
    height: '100%',
    paddingLeft: scale(2),
    paddingBottom: scale(8),
    fontSize: scale(16),
    borderBottomWidth: scale(1.5),
    borderBottomColor: colors.darkBlue,
  },
  icon: {
    position: 'absolute',
    right: 0,
    bottom: scale(5),
  },
  list: {
    flex: 1,
    width: '100%',
  },
});
