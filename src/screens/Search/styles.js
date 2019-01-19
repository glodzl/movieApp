import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import { scale } from '../../utils/scale';

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
  },
  textInput: {
    width: '100%',
    height: scale(30),
    marginTop: scale(15),
    marginBottom: scale(10),
    paddingLeft: scale(2),
    fontSize: scale(16),
    borderBottomWidth: scale(1),
    borderBottomColor: 'green',
  },
  icon: {
    position: 'absolute',
    bottom: scale(15),
    right: 0,
  },
  list: {
    flex: 1,
    width: '100%',
  },
});
