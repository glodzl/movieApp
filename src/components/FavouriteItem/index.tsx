import React from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Movie } from '../../interfaces';
import { imagePath, scale } from '../../utils';
import styles from './styles';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = (width - scale(30)) / 3;

interface Props {
  onPress: Function;
  item: Movie;
}

export const FavouriteItem = ({ item, onPress }: Props) => (
  <View style={styles.shadowContainer}>
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        source={{ uri: imagePath(item.poster_path, 185) }}
        style={[styles.image, { width: ITEM_WIDTH }]}
      />
      <View style={styles.detailContainer}>
        <Text style={styles.ratingText}>
          {item.vote_average || 'No rating'}
        </Text>
        {!!item.vote_average && (
          <Icon name="star" size={scale(14)} color="black" />
        )}
      </View>
    </TouchableOpacity>
  </View>
);
