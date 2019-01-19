import React from 'react';
import { Image, Text, TouchableOpacity, Dimensions, View } from 'react-native';
import { imagePath } from '../../api/imagePath';
import colors from '../../config/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = (width - 30) / 3;

export const FavouriteItem = ({ item, onPress }) => (
  <View
    style={{
      shadowColor: colors.black,
      shadowOffset: { width: 2, height: 3 },
      shadowRadius: 5,
      shadowOpacity: 0.2,
      elevation: 3,
    }}>
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        margin: 5,
        backgroundColor: colors.white,
      }}>
      <Image
        source={{ uri: imagePath(item.poster_path, 185) }}
        style={{
          height: 200,
          width: ITEM_WIDTH,
          resizeMode: 'cover',
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <Text style={{}}>{item.vote_average}</Text>
        <Icon name="star" size={14} color="black" />
      </View>
    </TouchableOpacity>
  </View>
);
