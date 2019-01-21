import React from 'react';
import { FlatList, TextInput, TouchableOpacity,View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { addFavourite, removeFavourite } from '../../actions';
import MovieItem from '../../components/MovieItem';
import { Genre, Movie } from '../../interfaces';
import { searchMovie } from '../../services';
import { scale } from '../../utils';
import styles from './styles';

interface Props {
  addFavourite: (item: Movie) => void;
  removeFavourite: (item: Movie) => void;
  genres: Genre[];
  favourites: Movie[];
}

interface State {
  search: any;
  searchValue: string;
  movies: Movie[]
}

class Search extends React.Component<Props, State> {
  movieSearch: (text: string) => void = text => {
    clearTimeout(this.state?.search);
    if (!!text) {
      const search = setTimeout(() => {
        searchMovie(text).then(res =>
          this.setState({ movies: res.data.results })
        );
      }, 1000);
      this.setState({ search });
    }
  };

  keyExtractor: (item: Movie) => string = item => item.id.toString();

  onChangeText: (searchValue: string) => void = searchValue =>
    this.setState({ searchValue }, () => this.movieSearch(searchValue));

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            value={this.state?.searchValue}
            placeholder="Search for movies by title"
            autoFocus
            onChangeText={this.onChangeText}
            style={styles.textInput}
          />
          {!!this.state?.searchValue && (
            <TouchableOpacity
              style={styles.icon}
              onPress={() => this.setState({ searchValue: '' })}>
              <Icon name="close" size={scale(25)} color="black" />
            </TouchableOpacity>
          )}
        </View>
        <FlatList
          style={styles.list}
          data={this.state?.movies}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => (
            <MovieItem
              item={item}
              onPress={() =>
                this.props.navigation.navigate('details', { item })
              }
              genres={this.props.genres}
              addFavourite={() => this.props.addFavourite(item)}
              removeFavourite={() => this.props.removeFavourite(item)}
            />
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  favourites: state.favourites,
  genres: state.genres,
});

export default connect(
  mapStateToProps,
  { addFavourite, removeFavourite }
)(Search);
