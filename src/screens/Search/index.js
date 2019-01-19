import React from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import axios from 'axios';
import MovieItem from '../../components/MovieItem';
import { apikey, searchText } from '../../config/axiosConfig';
import { searchMovie } from '../../api/searchMovie';

export default class Search extends React.Component {
  movieSearch = text => {
    clearTimeout(this.state?.search);
    const search = setTimeout(() => {
      axios
        .get(searchMovie(), { params: { ...apikey, ...searchText(text) } })
        .then(res => this.setState({ movies: res.data.results }));
    }, 1000);
    this.setState({ search });
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
          value={this.state?.searchValue}
          onChangeText={searchValue =>
            this.setState({ searchValue }, () => this.movieSearch(searchValue))
          }
          style={{ width: 200, height: 25 }}
        />
        <FlatList
          style={{ flex: 1, width: '100%' }}
          data={this.state?.movies}
          renderItem={({ item }) => (
            <MovieItem
              item={item}
              onPress={() =>
                this.props.navigation.navigate('details', { item })
              }
            />
          )}
        />

        <TouchableOpacity onPress={() => props.navigation.navigate('details')}>
          <Text>Details</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
