import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import { imagePath } from '../../api/imagePath';
import YouTube from 'react-native-youtube';
import axios from 'axios';
import { apikey } from '../../config/axiosConfig';
import { getVideo } from '../../api/getVideo';

const { width } = Dimensions.get('window');

export default class Detail extends React.Component {
  componentDidMount() {
    const { id } = this.props.navigation.getParam('item');
    axios
      .get(getVideo(id), { params: apikey })
      .then(e =>
        this.setState({ video: e.data.results[0].key }, () =>
          console.log(this.state)
        )
      );
  }

  render() {
    console.log('props', this.props.navigation.getParam('item'));
    const item = this.props.navigation.getParam('item');
    return (
      <ScrollView style={{ flex: 1 }}>
        <ImageBackground
          source={{ uri: imagePath(item.backdrop_path, 500) }}
          style={{
            height: 200,
            width,
            resizeMode: 'cover',
            marginBottom: 10,
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Text>Back</Text>
          </TouchableOpacity>
        </ImageBackground>
        <View style={{ marginHorizontal: 15 }}>
          <View style={{ flexDirection: 'row', marginBottom: 20 }}>
            <Image
              source={{ uri: imagePath(item.poster_path, 185) }}
              style={{
                height: 180,
                width: 120,
                resizeMode: 'cover',
              }}
            />
            <View>
              <Text>{item.title}</Text>
              <Text>genre</Text>
              <Text>{item.vote_average}</Text>
              <Text>{item.release_date}</Text>
            </View>
          </View>
          <Text>{item.overview}</Text>
          {this.state?.video && (
            <YouTube
              apiKey="AIzaSyBiib2QGNt4r-Ev7bGbrgYeql-O7E7--nw"
              videoId={this.state?.video} // The YouTube video ID
              style={{
                height: 200,
                width: 320,
                backgroundColor: 'grey',
                marginTop: 20,
                alignSelf: 'center',
              }}
            />
          )}
        </View>
      </ScrollView>
    );
  }
}
