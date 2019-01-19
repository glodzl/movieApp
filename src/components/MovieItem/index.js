import React from 'react';
import { connect } from 'react-redux';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { imagePath } from '../../api/imagePath';
import { addFavourite, removeFavourite } from '../../actions/favourite';
import colors from '../../config/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const MovieItem = ({
  item,
  isFavourite,
  addFavourite,
  removeFavourite,
  onPress,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex: 1,
      marginVertical: 10,
      marginHorizontal: 15,
      backgroundColor: colors.white,
      borderRadius: 10,
      shadowColor: colors.black,
      shadowOffset: { width: 2, height: 3 },
      shadowRadius: 5,
      shadowOpacity: 0.2,
      elevation: 3,
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{ marginRight: 3 }}>
            {item.vote_average || 'No rating'}
          </Text>
          <Icon name="star" size={14} color="black" />
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>genre</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{ marginRight: 5 }}>
            {item.release_date.split('-')[0]}
          </Text>
          <Icon name="date-range" size={20} color="black" />
        </View>
      </View>
      <Text
        style={{ marginVertical: 10 }}
        numberOfLines={5}
        ellipsizeMode="tail">
        {item.overview}
      </Text>
      <TouchableOpacity
        style={{ position: 'absolute', bottom: 10, right: 0 }}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        onPress={() =>
          isFavourite ? removeFavourite(item) : addFavourite(item)
        }>
        <Icon
          name={isFavourite ? 'favorite' : 'favorite-border'}
          size={24}
          color="black"
        />
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

export default connect(
  null,
  { addFavourite, removeFavourite }
)(MovieItem);
