import React from 'react';
import { FlatList, TouchableOpacity, View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MovieItem from '../../components/MovieItem';
import { addFavourite, removeFavourite } from '../../actions/favourite';
import { apikey, searchText } from '../../config/axiosConfig';
import { searchMovie } from '../../api/searchMovie';
import { scale } from '../../utils/scale';
import styles from './styles';

class Search extends React.Component {
  movieSearch = text => {
    clearTimeout(this.state?.search);
    if (!!text) {
      const search = setTimeout(() => {
        axios
          .get(searchMovie(), { params: { ...apikey, ...searchText(text) } })
          .then(res => this.setState({ movies: res.data.results }));
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
