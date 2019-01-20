import React from 'react';
import { connect } from 'react-redux';
import { FlatList, Text, View } from 'react-native';
import { FavouriteItem } from '../../components/FavouriteItem';
import styles from './styles';

class Favourites extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.favourites.length ? (
          <FlatList
            style={styles.list}
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
        ) : (
          <Text style={styles.emptyText}>
            You didn't add any favourites yet.
          </Text>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({ favourites: state.favourites });

export default connect(mapStateToProps)(Favourites);
