import React from 'react';
import { Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import { imagePath } from '../../api/imagePath';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = (width - 30) / 3;

export const FavouriteItem = ({ item, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      borderRadius: 10,
      overflow: 'hidden',
      alignItems: 'center',
      margin: 5,
      backgroundColor: 'lightgrey',
    }}>
    <Image
      source={{ uri: imagePath(item.poster_path, 185) }}
      style={{
        height: 200,
        width: ITEM_WIDTH,
        resizeMode: 'cover',
      }}
    />
    <Text style={{ marginVertical: 10 }}>{item.vote_average}</Text>
  </TouchableOpacity>
);
