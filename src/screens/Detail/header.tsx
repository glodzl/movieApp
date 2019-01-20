import React from 'react';
import { TouchableOpacity, View, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { scale } from '../../utils';
import styles from './styles';

interface Props {
  animationRange: any;
  imageSrc?: any;
  backPress: () => any;
  isFavourite: boolean;
  favouritePress: () => any;
  title: string;
}

const AnimatedHeader = ({
  animationRange,
  imageSrc,
  backPress,
  isFavourite,
  favouritePress,
  title,
}: Props) => {
  const animateHeader = {
    transform: [
      {
        translateY: animationRange.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -scale(150)],
        }),
      },
    ],
  };
  const backgroundOpacity = {
    opacity: animationRange.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0.2],
    }),
  };
  const titleOpacity = {
    opacity: animationRange.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
  };

  return (
    <Animated.View style={[styles.headerBackground, animateHeader]}>
      <Animated.Image
        style={[styles.headerImage, backgroundOpacity]}
        source={imageSrc}
      />
      <View style={styles.headerButtonContainer}>
        <TouchableOpacity onPress={backPress}>
          <Icon name="chevron-left" size={scale(25)} color="white" />
        </TouchableOpacity>
        <Animated.Text style={[styles.headerTitle, titleOpacity]}>
          {title}
        </Animated.Text>
        <TouchableOpacity onPress={favouritePress}>
          <Icon
            name={isFavourite ? 'favorite' : 'favorite-border'}
            size={scale(24)}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default AnimatedHeader;
