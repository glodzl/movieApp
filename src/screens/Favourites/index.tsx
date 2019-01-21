import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { FavouriteItem } from '../../components/FavouriteItem';
import { Movie } from '../../interfaces';
import styles from './styles';

interface Props {
  favourites: Movie[];
}

class Favourites extends React.Component<Props> {
  keyExtractor: (item: Movie) => string = item => item.id.toString();

  render() {
    return (
      <View style={styles.container}>
        {this.props.favourites.length ? (
          <FlatList
            style={styles.list}
            numColumns={3}
            data={this.props.favourites}
            keyExtractor={this.keyExtractor}
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
