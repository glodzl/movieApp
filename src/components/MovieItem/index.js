import React from 'react';
import { connect } from 'react-redux';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { imagePath } from '../../api/imagePath';
import { scale } from '../../utils/scale';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const MovieItem = ({
  item,
  addFavourite,
  removeFavourite,
  onPress,
  genres,
  favourites,
}) => {
  const isFavourite = favourites.filter(movie => movie.title === item.title)
    .length;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imagePath(item.poster_path, 185) }}
          style={styles.image}
        />
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {item.title}
          </Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>
              {item.vote_average || 'No rating'}
            </Text>
            <Icon name="star" size={scale(14)} color="black" />
          </View>
        </View>
        <View style={styles.genreContainer}>
          {genres && (
            <Text
              style={styles.genreText}
              numberOfLines={2}
              ellipsizeMode="tail">
              {item.genre_ids
                .map(id => genres.filter(genre => genre.id === id)[0]?.name)
                .join(', ')}
            </Text>
          )}
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>
              {item.release_date.split('-')[0]}
            </Text>
            <Icon name="date-range" size={scale(20)} color="black" />
          </View>
        </View>
        <Text style={styles.overview} numberOfLines={5} ellipsizeMode="tail">
          {item.overview}
        </Text>
        <TouchableOpacity
          style={styles.favourite}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          onPress={() =>
            isFavourite ? removeFavourite(item) : addFavourite(item)
          }>
          <Icon
            name={isFavourite ? 'favorite' : 'favorite-border'}
            size={scale(24)}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const mapStateToProps = state => ({ favourites: state.favourites });

export default connect(mapStateToProps)(MovieItem);
