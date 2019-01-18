import React, { Component } from 'react';
import MainNavigator from './Routes';
import { SafeAreaView } from 'react-navigation';

export default class AppNavigationComponent extends Component {
  render() {
    return (
      <SafeAreaView
        scrollEnabled={false}
        style={{ flex: 1, backgroundColor: 'grey' }}>
        <MainNavigator />
      </SafeAreaView>
    );
  }
}
