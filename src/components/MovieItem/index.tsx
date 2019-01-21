import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { Genre, Movie } from '../../interfaces';
import { getYear, imagePath, scale } from '../../utils';
import styles from './styles';


interface Props {
  item: Movie;
  genres: Genre[];
  favourites: Movie[];
  onPress: () => any;
  addFavourite: (item: Movie) => void;
  removeFavourite: (item: Movie) => void;
}

const MovieItem = ({
  item,
  addFavourite,
  removeFavourite,
  onPress,
  genres,
  favourites,
}: Props) => {
  const isFavourite:boolean = favourites.filter(movie => movie.id === item.id)
    .length > 0;
  const favouritePress: () => any = () => isFavourite ? removeFavourite(item) : addFavourite(item);

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
            {!!item.vote_average && (
              <Icon name="star" size={scale(16)} color="black" />
            )}
          </View>
        </View>
        <View style={styles.genreContainer}>
          {genres && (
            <Text
              style={styles.genreText}
              numberOfLines={1}
              ellipsizeMode="tail">
              {item.genre_ids
                .map(id => genres.filter(genre => genre.id === id)[0]?.name)
                .join(', ')}
            </Text>
          )}
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>{getYear(item.release_date)}</Text>
            <Icon name="date-range" size={scale(18)} color="black" />
          </View>
        </View>
        <Text style={styles.overview} numberOfLines={5} ellipsizeMode="tail">
          {item.overview}
        </Text>
        <TouchableOpacity
          style={styles.favourite}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          onPress={favouritePress}>
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
