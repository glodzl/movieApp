import React from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MovieItem from '../../components/MovieItem';
import { apikey, searchText } from '../../config/axiosConfig';
import { searchMovie } from '../../api/searchMovie';
import colors from '../../config/colors';

export default class Search extends React.Component {
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
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 15,
          backgroundColor: colors.base,
        }}>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            value={this.state?.searchValue}
            placeholder="Search for movie by name"
            autoFocus
            onChangeText={searchValue =>
              this.setState({ searchValue }, () =>
                this.movieSearch(searchValue)
              )
            }
            style={{
              width: '100%',
              height: 30,
              marginTop: 15,
              marginBottom: 10,
              paddingLeft: 2,
              fontSize: 16,
              borderBottomWidth: 1,
              borderBottomColor: 'green',
            }}
          />
          {!!this.state?.searchValue && (
            <TouchableOpacity
              style={{ position: 'absolute', bottom: 15, right: 0 }}
              onPress={() => this.setState({ searchValue: '' })}>
              <Icon name="close" size={25} color="black" />
            </TouchableOpacity>
          )}
        </View>

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
      </View>
    );
  }
}
