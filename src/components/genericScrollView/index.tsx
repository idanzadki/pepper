import {ScrollView, Text, View} from 'react-native';
import {styles} from './styles';

interface GenericScrollProps<T> {
  style?: any;
  title: string;
  list: Array<T>;
  horizontal?: boolean;
  renderItem: (item: T) => JSX.Element;
  handlePress?: () => void;
}

export const GenericScrollView = <T,>({
  title,
  style,
  list = [],
  renderItem,
  horizontal = false,
}: GenericScrollProps<T>) => (
  <ScrollView style={styles.scrollView}>
    <Text style={styles.h1}>{title}</Text>

    {list && list.length === 0 ? (
      <View style={{}}>
        <Text>{'No items yet...'}</Text>
      </View>
    ) : (
      <ScrollView style={{...styles.list, ...style}} horizontal={horizontal}>
        {list && list.map(item => renderItem(item))}
      </ScrollView>
    )}
  </ScrollView>
);
