import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default (Favourites = props => {
  console.log('props', props);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Favourites component</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('details')}>
        <Text>Details</Text>
      </TouchableOpacity>
    </View>
  );
});
