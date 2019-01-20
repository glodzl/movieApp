import React from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import MovieItem from '../../components/MovieItem';
import { addGenre, addFavourite, removeFavourite } from '../../actions';
import { Genre, Movie } from '../../interfaces';
import { getGenre, getPopular } from '../../services';
import styles from './styles';

interface Props {
  addFavourite: Function;
  removeFavourite: Function;
  addGenre: Function;
  genres: Array<Genre>;
  favourites: Array<Movie>;
}

interface State {
  movies: Array<Movie>;
  page: number;
}

class Popular extends React.Component<Props, State> {
  state = {
    movies: [],
    page: 1,
  };
  componentDidMount() {
    this.loadPopular();
    getGenre().then(res => this.props.addGenre(res.data.genres));
  }

  loadPopular = () =>
    getPopular(this.state.page).then(res =>
      this.setState({
        movies: [...this.state.movies, ...res.data.results],
      })
    );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={this.state.movies}
          keyExtractor={item => item.id.toString()}
          onEndReached={() =>
            this.setState({ page: this.state.page + 1 }, this.loadPopular)
          }
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
  { addGenre, addFavourite, removeFavourite }
)(Popular);
