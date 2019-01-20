import React from 'react';
import {
  Image,
  Text,
  View,
  Animated,
} from 'react-native';
import AnimatedHeader from './header';
import { youtubeApiKey } from '../../config';
import { addFavourite, removeFavourite } from '../../actions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import YouTube from 'react-native-youtube';
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
  video: any;
}
const scrollRangeForAnimation = scale(150);
// headerHeight = scale(200);
const HeaderPlaceholder = <View style={styles.headerPlaceholder} />;

class Detail extends React.Component<Props, State> {
  
  state = {
    scrollY: new Animated.Value(0)
  }

  public static defaultProps = { 
    genres: null
  };

  componentDidMount() {
    const { id } = this.props.navigation.getParam('item');
    getVideo(id).then(res => this.setState({ video: res.data.results[0].key }));
  }

  render() {
    const item = this.props.navigation.getParam('item');
    const isFavourite = this.props.favourites.filter(movie => movie.title === item.title)
    .length > 0;
    const favouritePress = () => isFavourite ? this.props.removeFavourite(item) : this.props.addFavourite(item);
    const backPress = () => this.props.navigation.goBack()

    let _scrollView = null;
    const onScrollEndSnapToEdge = event => {
      const y = event.nativeEvent.contentOffset.y;
      if (0 < y && y < scrollRangeForAnimation / 2) {
          if (_scrollView) {
              _scrollView.scrollTo({y: 0});
          }
      } else if (scrollRangeForAnimation / 2 <= y && y < scrollRangeForAnimation) {
          if (_scrollView) {
              _scrollView.scrollTo({y: scrollRangeForAnimation});
          }
      }
    };
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
        ref={scrollView => {
            _scrollView = scrollView ? scrollView._component : null;
        }}
        onScrollEndDrag={onScrollEndSnapToEdge}
        onMomentumScrollEnd={onScrollEndSnapToEdge}
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
              apiKey={youtubeApiKey}
              videoId={this.state?.video} // The YouTube video ID
              style={styles.youtube}
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