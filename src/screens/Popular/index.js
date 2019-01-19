import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import MovieItem from '../../components/MovieItem';
import axios from 'axios';
import { setAxiosHeader, apikey } from '../../config/axiosConfig';
import { getDetails, getPopular } from '../../api/getDetails';

export default class Popular extends React.Component {
  componentDidMount() {
    axios
      .get(getPopular(), { params: apikey })
      .then(e =>
        this.setState({ movies: e.data.results }, () => console.log(this.state))
      );
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          margin: 15,
        }}>
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
