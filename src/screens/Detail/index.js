import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default (Detail = props => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details component</Text>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
});
