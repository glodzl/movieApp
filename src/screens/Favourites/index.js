import React from 'react';
import { connect } from 'react-redux';
import { FlatList, View } from 'react-native';
import { FavouriteItem } from '../../components/FavouriteItem';
import styles from './styles';

class Favourites extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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
      </View>
    );
  }
}

const mapStateToProps = state => ({ favourites: state.favourites });

export default connect(mapStateToProps)(Favourites);
