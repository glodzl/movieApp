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
  addFavourite: Function;
  removeFavourite: Function;
  genres: Array<Genre>;
  favourites: Array<Movie>;
}

interface State {
  search: any;
  movies: Array<Movie>
}

class Search extends React.Component<mapStateToProps, State> {
  movieSearch = text => {
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
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            value={this.state?.searchValue}
            placeholder="Search for movie by name"
            autoFocus
            onChangeText={searchValue =>
              this.setState({ searchValue }, () =>
                this.movieSearch(searchValue)
              )
            }
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
          keyExtractor={item => item.id.toString()}
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
