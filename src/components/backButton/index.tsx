import { TouchableOpacity, Image } from 'react-native';
import { ImageHandler } from '../../utils/ImageHandler';
import { Colors } from '../../assets/theme/colors'; 

interface ButtonProps {
  onClick: () => void;
  isMapHeader?: boolean;
  width?: number; // set button width (default: 40)
  height?: number; // set button height (default: 40)
  imageSource?: string; // imageSource is used to tell the button component which image to use (required for this button)
}

export const BackButton = ({ onClick, width, height, isMapHeader, imageSource }: ButtonProps) => (
  <TouchableOpacity
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
      marginHorizontal: 15,
      width: width ? width : 40,
      height: height ? height : 40,
      flexDirection: 'row',
      ...(isMapHeader && {backgroundColor: Colors.white, borderRadius: 5})
    }}
    onPress={onClick}
  >
    {imageSource && (
      <Image
        source={ImageHandler(imageSource)}
        style={{
          width: 24,
          height: 24,
        }}
      />
    )}
  </TouchableOpacity>
);
