import React from 'react';
import { Image, Text, TouchableOpacity, Dimensions, View } from 'react-native';
import { imagePath } from '../../api/imagePath';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { scale } from '../../utils/scale';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = (width - scale(30)) / 3;

export const FavouriteItem = ({ item, onPress }) => (
  <View style={styles.shadowContainer}>
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        source={{ uri: imagePath(item.poster_path, 185) }}
        style={[styles.image, { width: ITEM_WIDTH }]}
      />
      <View style={styles.detailContainer}>
        <Text style={styles.ratingText}>{item.vote_average}</Text>
        <Icon name="star" size={scale(14)} color="black" />
      </View>
    </TouchableOpacity>
  </View>
);
