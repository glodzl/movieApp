import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import SearchScreen from './screens/Search';
import PopularScreen from './screens/Popular';
import DetailScreen from './screens/Detail';
import FavouritesScreen from './screens/Favourites';
import { scale } from './utils';
import colors from './config/colors';

const navigationOptions = {
  mode: 'modal',
  headerMode: 'none',
};

const Popular = createStackNavigator(
  {
    popular: PopularScreen,
    details: DetailScreen,
  },
  navigationOptions
);

const Favourites = createStackNavigator(
  {
    favourites: FavouritesScreen,
    details: DetailScreen,
  },
  navigationOptions
);

const Search = createStackNavigator(
  {
    search: SearchScreen,
    details: DetailScreen,
  },
  navigationOptions
);

[Popular, Favourites, Search].forEach(
  screen =>
    (screen.navigationOptions = ({ navigation }) => {
      let tabBarVisible = true;
      if (navigation.state.index > 0) {
        tabBarVisible = false;
      }
      return {
        tabBarVisible,
      };
    })
);

const MainNavigator = createBottomTabNavigator(
  {
    Popular,
    Favourites,
    Search,
  },
  {
    tabBarOptions: {
      initialRouteName: 'popular',
      animationEnabled: true,
      backBehavior: 'none',
      lazy: true,
      showIcon: false,
      inactiveTintColor: colors.lightBlue,
      activeTintColor: colors.mediumBlue,
      labelStyle: {
        fontFamily: 'Roboto-Light',
        fontSize: scale(14),
      },
      style: {
        height: scale(45),
        backgroundColor: colors.darkBlue,
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  }
);

export default createAppContainer(MainNavigator);
