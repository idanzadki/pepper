import {ImageSourcePropType} from 'react-native';

export const images: {[key: string]: ImageSourcePropType} = {
  loading: require('../assets/pictures/loading2.png'),
  search: require('../assets/pictures/search.png'),
};

export const ImageHandler = (name: string) => {
  const im = name in images ? images[name] : images.addPhoto;
  return im;
};
