import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { imagePath } from '../../api/imagePath';

export const MovieItem = ({ item }) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex: 1,
      width: '100%',
      marginVertical: 10,
      backgroundColor: 'lightgrey',
      borderRadius: 10,
    }}>
    <View
      style={{
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        overflow: 'hidden',
      }}>
      <Image
        source={{ uri: imagePath(item.poster_path, 500) }}
        style={{
          height: 200,
          width: 130,
          resizeMode: 'cover',
        }}
      />
    </View>
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 5,
        }}>
        <Text style={{}}>{item.title}</Text>
        <Text>{item.vote_average}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>genre</Text>
        <Text>{item.release_date}</Text>
      </View>
      <Text
        style={{ marginVertical: 10 }}
        numberOfLines={5}
        ellipsizeMode="tail">
        {item.overview}
      </Text>
      <TouchableOpacity onPress={() => console.log('favourite')}>
        <Text>Favourite</Text>
      </TouchableOpacity>
    </View>
  </View>
);
