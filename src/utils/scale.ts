import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

// The "base" width and height (it will count the scaled values from these)
const guidelineBaseWidth: number = 350;

export const scale = (size: number): number =>
  (width / guidelineBaseWidth) * size;
