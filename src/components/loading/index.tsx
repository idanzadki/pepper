import { useEffect } from 'react';

import { View, Animated, Easing, ViewStyle } from 'react-native';
import { ImageHandler } from '../../utils/ImageHandler'; 

export const Loading = ({ style }: { style?: ViewStyle }) => {
  const rotateValueHolder = new Animated.Value(0);

  const startImageRotateFunction = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => startImageRotateFunction());
  };

  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 3],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    startImageRotateFunction();
  });

  return (
    <View style={{ ...style }}>
      <Animated.Image
        style={{
          width: 50,
          height: 50,
          zIndex: 999999,
          transform: [{ rotate: RotateData }],
        }}
        //   source={{
        //     uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
        //   }}
        source={ImageHandler('loading')}
      />
    </View>
  );
};
