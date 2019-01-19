import React from 'react';
import { connect } from 'react-redux';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import MovieItem from '../../components/MovieItem';
import axios from 'axios';
import colors from '../../config/colors';
import { setAxiosHeader, apikey } from '../../config/axiosConfig';
import { getDetails, getPopular } from '../../api/getDetails';

class Popular extends React.Component {
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
          backgroundColor: colors.base,
        }}>
        <FlatList
          style={{ flex: 1, width: '100%' }}
          data={this.state?.movies}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <MovieItem
              item={item}
              onPress={() =>
                this.props.navigation.navigate('details', { item })
              }
              isFavourite={
                this.props.favourites.filter(movie => movie.id === item.id)
                  .length
              }
            />
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({ favourites: state.favourites });

export default connect(mapStateToProps)(Popular);
