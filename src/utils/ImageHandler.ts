import {ImageSourcePropType} from 'react-native';

export const images: {[key: string]: ImageSourcePropType} = {
  loading: require('../assets/pictures/loading2.png'),
  search: require('../assets/pictures/search.png'),
};

export const ImageHandler = (key: string) => {
  const img = key in images ? images[key] : images.search;
  return img;
};
