import React from 'react';
import { connect } from 'react-redux';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { imagePath } from '../../api/imagePath';
import { addFavourite } from '../../actions/favourite';

export const MovieItem = ({ item, addFavourite }) => (
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
        source={{ uri: imagePath(item.poster_path, 185) }}
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
      <TouchableOpacity onPress={() => addFavourite(item)}>
        <Text>Favourite</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default connect(
  null,
  { addFavourite }
)(MovieItem);
