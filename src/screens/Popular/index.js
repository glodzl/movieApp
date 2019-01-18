import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default (Popular = props => {
  console.log('props', props);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Popular component</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('details')}>
        <Text>Details</Text>
      </TouchableOpacity>
    </View>
  );
});
