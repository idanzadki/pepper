import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { ImageHandler } from '../../../utils/ImageHandler';

export const Header = () => (
  <View
    style={{
      flex: 0.1,
      // borderWidth: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
    }}
  >
    <Image
      style={{ height: 25, width: '50%', resizeMode: 'contain' }}
      source={ImageHandler('headerLogo')}
    />
    <View style={{ flexDirection: 'row', width: '20%', justifyContent: 'space-around' }}>
      <TouchableOpacity onPress={() => {}}>
        <Image
          style={{ height: 25, width: 25, resizeMode: 'contain' }}
          source={ImageHandler('cart')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Image
          style={{ height: 25, width: 25, resizeMode: 'contain' }}
          source={ImageHandler('bell')}
        />
      </TouchableOpacity>
    </View>
  </View>
);
