import React from 'react';
import { connect } from 'react-redux';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { FavouriteItem } from '../../components/FavouriteItem';
import colors from '../../config/colors';
import axios from 'axios';
import { setAxiosHeader, apikey } from '../../config/axiosConfig';
import { getDetails, getPopular } from '../../api/getDetails';

class Favourites extends React.Component {
  render() {
    console.log('this.props', this.props);
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.base,
        }}>
        <FlatList
          style={{
            flex: 1,
            width: '100%',
          }}
          numColumns={3}
          data={this.props.favourites}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <FavouriteItem
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

const mapStateToProps = state => ({ favourites: state.favourites });

export default connect(mapStateToProps)(Favourites);
