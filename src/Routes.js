/* eslint no-use-before-define: 0 */

import {
  createMaterialTopTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import SearchScreen from './screens/Search';
import PopularScreen from './screens/Popular';
import DetailScreen from './screens/Detail';
import FavouritesScreen from './screens/Favourites';

const navigationOptions = {
  tabBarVisible: false,
  mode: 'modal',
  headerMode: 'none',
};

const MainNavigator = createMaterialTopTabNavigator(
  {
    popular: {
      screen: createStackNavigator(
        {
          popular: {
            screen: PopularScreen,
          },
          detail: {
            screen: DetailScreen,
          },
        },
        navigationOptions
      ),
    },
    search: {
      screen: createStackNavigator(
        {
          search: {
            screen: SearchScreen,
          },
          detail: {
            screen: DetailScreen,
          },
        },
        navigationOptions
      ),
    },
    favourites: {
      screen: createStackNavigator(
        {
          favourites: {
            screen: FavouritesScreen,
          },
          detail: {
            screen: DetailScreen,
          },
        },
        navigationOptions
      ),
    },
  },
  {
    initialRouteName: 'popular',
    animationEnabled: true,
    swipeEnabled: true,
    backBehavior: 'none',
    lazy: true,
    tabBarPosition: 'bottom',
    navigationOptions,
  }
);

export default createAppContainer(MainNavigator);
