import {View, TextInput, Image} from 'react-native';
import {Filter} from '../../models/Filter';
import {ImageHandler} from '../../utils/ImageHandler';
import {styles} from './style';

interface SearchProps {
  error?: string;
  handleChange: (text: string) => void;
  handleSelect: (item?: any) => void;
  touched?: boolean;
  value: string;
  loading: boolean;
}

export const Search = ({handleChange, value, touched}: SearchProps) => {
  return (
    <View style={styles.search}>
      <View style={styles.container}>
        <View style={styles.inputHolder}>
          <Image
            style={styles.searchImage}
            source={ImageHandler('search')}
            alt=""
          />
          <TextInput
            style={styles.searchInput}
            placeholder="שם המוטב"
            value={value}
            onChangeText={handleChange}
          />
        </View>
      </View>
    </View>
  );
};
