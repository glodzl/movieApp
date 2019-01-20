import React from 'react';
import { connect } from 'react-redux';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import YouTube from 'react-native-youtube';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getVideo } from '../../services';
import { getYear, imagePath, scale } from '../../utils';
import styles from './styles';

class Detail extends React.Component {
  componentDidMount() {
    const { id } = this.props.navigation.getParam('item');
    getVideo(id).then(res => this.setState({ video: res.data.results[0].key }));
  }

  render() {
    const item = this.props.navigation.getParam('item');
    return (
      <ScrollView style={styles.container}>
        <ImageBackground
          source={{ uri: imagePath(item.backdrop_path, 500) }}
          style={styles.imageHeader}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Text>Back</Text>
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.mainContainer}>
          <View style={styles.subContainer}>
            <Image
              source={{ uri: imagePath(item.poster_path, 185) }}
              style={styles.image}
            />
            <View style={styles.detailContainer}>
              <Text style={styles.title}>{item.title}</Text>
              {this.props?.genres && (
                <Text style={styles.genre}>
                  {item.genre_ids
                    .map(
                      id =>
                        this.props.genres.filter(genre => genre.id === id)[0]
                          ?.name
                    )
                    .join(', ')}
                </Text>
              )}
              <View style={styles.detailSubContainer}>
                <Text style={styles.detailText}>{item.vote_average}</Text>
                <Icon name="star" size={scale(14)} color="black" />
              </View>
              <View style={styles.detailSubContainer}>
                <Text style={styles.detailText}>
                  {getYear(item.release_date)}
                </Text>
                <Icon name="date-range" size={scale(16)} color="black" />
              </View>
            </View>
          </View>
          <Text style={styles.overview}>{item.overview}</Text>
          {this.state?.video && (
            <YouTube
              apiKey="AIzaSyBiib2QGNt4r-Ev7bGbrgYeql-O7E7--nw"
              videoId={this.state?.video} // The YouTube video ID
              style={styles.youtube}
            />
          )}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({ genres: state.genres });

export default connect(mapStateToProps)(Detail);
