import {TouchableOpacity, Text} from 'react-native';

export interface AutoCompleteItemProps<T> {
  onSelect?: (item: T) => void;
  item: T;
}

export const AutoCompleteItem = <T extends unknown>({
  item,
  onSelect,
}: AutoCompleteItemProps<T>) => (
  <TouchableOpacity style={{}} onPress={() => onSelect && onSelect(item)}>
    <Text style={{textAlign: 'center'}}>
      {JSON.stringify(item) || 'No Item'}
    </Text>
  </TouchableOpacity>
);
