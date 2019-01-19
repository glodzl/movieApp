import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import SearchScreen from './screens/Search';
import PopularScreen from './screens/Popular';
import DetailScreen from './screens/Detail';
import FavouritesScreen from './screens/Favourites';

const navigationOptions = {
  mode: 'modal',
  headerMode: 'none',
};

const popular = createStackNavigator(
  {
    popular: PopularScreen,
    details: DetailScreen,
  },
  navigationOptions
);

const favourites = createStackNavigator(
  {
    favourites: FavouritesScreen,
    details: DetailScreen,
  },
  navigationOptions
);

const search = createStackNavigator(
  {
    search: SearchScreen,
    details: DetailScreen,
  },
  navigationOptions
);

[popular, favourites, search].forEach(
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
    popular,
    favourites,
    search,
  },
  {
    tabBarOptions: {
      initialRouteName: 'popular',
      animationEnabled: true,
      swipeEnabled: true,
      backBehavior: 'none',
      lazy: true,
      navigationOptions,
    },
  }
);

export default createAppContainer(MainNavigator);
