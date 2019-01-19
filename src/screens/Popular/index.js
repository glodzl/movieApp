import React from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import MovieItem from '../../components/MovieItem';
import { addGenre } from '../../actions/genre';
import { addFavourite, removeFavourite } from '../../actions/favourite';
import { getPopular, getGenre } from '../../services';
import styles from './styles';

class Popular extends React.Component {
  componentDidMount() {
    getPopular().then(res => this.setState({ movies: res.data.results }));
    getGenre().then(res => this.props.addGenre(res.data.genres));
  }

  render() {
    return (
      <View style={styles.container}>
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
  { addGenre, addFavourite, removeFavourite }
)(Popular);
