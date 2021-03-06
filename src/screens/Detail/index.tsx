import React from 'react';
import {
  Image,
  Text,
  View,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import YouTube from 'react-native-youtube';
import { connect } from 'react-redux';
import { addFavourite, removeFavourite } from '../../actions';
import { YOUTUBE_API_KEY } from '../../config';
import AnimatedHeader from './header';
import { Genre, Movie } from '../../interfaces';
import { getVideo } from '../../services';
import { getYear, imagePath, scale } from '../../utils';
import styles from './styles';

interface Props {
  genres: Genre[];
  favourites: Movie[];
  addFavourite: (item: Movie) => void;
  removeFavourite: (item: Movie) => void;
}

interface State {
  scrollY: any;
  video: string;
  videoHeight: number;
}
const scrollRangeForAnimation = scale(150);
// headerHeight = scale(200);
const HeaderPlaceholder = <View style={styles.headerPlaceholder} />;

class Detail extends React.Component<Props, State> {
  
  state = {
      scrollY: new Animated.Value(0),
      video: null,
      videoHeight: scale(200)
  } 

  public static defaultProps = { 
    genres: null
  };

  componentDidMount() {
    const { id } = this.props.navigation.getParam('item');
    getVideo(id).then(res => this.setState({ video: res.data.results[0].key }));
  }

  handleReady = () => {
        // android fix to have controls on video
        setTimeout(() => this.setState({ videoHeight: scale(201) }), 500);
  }

  render() {
    const item: Movie = this.props.navigation.getParam('item');
    const isFavourite:boolean = this.props.favourites.filter(movie => movie.id === item.id)
    .length > 0;
    const favouritePress: () => any = () => isFavourite ? this.props.removeFavourite(item) : this.props.addFavourite(item);
    const backPress: () => any = () => this.props.navigation.goBack()

    const animationRange = this.state.scrollY.interpolate({
      inputRange: [0, scrollRangeForAnimation],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <AnimatedHeader 
            title={item.title}
            isFavourite={isFavourite}
            favouritePress={favouritePress} 
            backPress={backPress} 
            animationRange={animationRange} 
            imageSrc={{ uri: imagePath(item.backdrop_path, 500) }}/>   
        </View>
      <Animated.ScrollView 
        style={styles.scrollViewContainer}
        onScroll={Animated.event(
          [{nativeEvent: { contentOffset: { y: this.state.scrollY }}}],
          { useNativeDriver: true }
        )} >
        {HeaderPlaceholder}
        <View style={styles.mainContainer}>
          <View style={styles.subContainer}>
            <Image
              source={{ uri: imagePath(item.poster_path, 185) }}
              style={styles.image}
            />
            <View style={styles.detailContainer}>
              <Text style={styles.title}>{item.title}</Text>
              {this.props.genres && (
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
                <Text style={styles.detailText}>{item.vote_average || 'No rating'}</Text>
                {!!item.vote_average && (
                  <Icon name="star" size={scale(14)} color="black" />
                )}
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
          {this.state.video && (
            <YouTube
              apiKey={YOUTUBE_API_KEY}
              controls={1}
              play={false}
              videoId={this.state.video}
              onReady={this.handleReady}
              style={[styles.youtube, { height: this.state.videoHeight } ]}
            />
          )}
        </View>
      </Animated.ScrollView>
      </View>
    );
  }
}


const mapStateToProps = state => ({ favourites: state.favourites, genres: state.genres });

export default connect(mapStateToProps, {addFavourite, removeFavourite })(Detail);