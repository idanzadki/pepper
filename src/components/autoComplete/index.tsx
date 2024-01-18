// import {useCallback, useMemo, useState} from 'react';
// import {View, Text, StyleSheet, TextInput, Image, FlatList} from 'react-native';
// import uuid from 'react-uuid';

// import {Filter} from '../../models/Filter';
// import {ImageHandler} from '../../utils/ImageHandler';
// import {Loading} from '../loading';
// import {Colors} from '../../assets/theme/colors';
// import {useAutoComplete} from '../../hooks/useAutoComplete';
// import {AutoCompleteItem} from './autoCompleteItem';

// interface AutoCompleteProps {
//   list: any[];
//   error?: string;
//   handleChange: (text: string) => void;
//   handleSelect: (item?: any) => void;
//   filters: Filter;
//   touched?: boolean;
// }

// export const AutoComplete = ({
//   handleSelect,
//   filters,
//   handleChange,
//   touched,
//   list,
// }: AutoCompleteProps) => {
//   const [lazyLoading, setLazyLoading] = useState(false);

//   const {
//     debounceLoading,
//     text,
//     autoList,
//     open,
//     handleSetText,
//     handleSetDebounce,
//   } = useAutoComplete({
//     filters,
//     onSelect: handleSelect,
//     onChange: handleChange,
//   });

//   return (
//     <View
//       style={{
//         flex: 1,
//         gap: 5,
//         // width: "100%",
//       }}>
//       <View
//         style={{
//           // flex: 1,
//           flexDirection: 'row',
//           borderRadius: 10,
//           alignItems: 'center',
//           justifyContent: 'center',
//           // width: "100%",
//           // padding: 5,
//           backgroundColor: '#f9f9f9',
//         }}>
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}>
//           <Image
//             style={{
//               height: 15,
//               width: 15,
//               resizeMode: 'stretch',
//               marginHorizontal: 5,
//             }}
//             source={ImageHandler('search')}
//             alt=""
//           />
//           <TextInput
//             style={{
//               flex: 1,
//               // color: Colors.black,
//             }}
//             placeholder="Search"
//             value={text}
//             onChangeText={text => {
//               handleSetText(text);
//               !debounceLoading && handleSetDebounce(true);
//             }}
//           />
//           <View style={{width: 20}}>{debounceLoading && <Loading />}</View>
//         </View>

//         {/* <Text>{debounceLoading && "Loading"}</Text> */}
//       </View>

//       {open && (
//         <FlatList
//           style={{
//             position: 'absolute',
//             borderWidth: 1,
//             backgroundColor: 'white',
//             zIndex: 99,
//             top: 40,
//             width: '100%',
//             height: 300,
//           }}
//           maxToRenderPerBatch={20}
//           onEndReachedThreshold={0.6}
//           windowSize={30}
//           // onEndReached={handleGetPage}
//           ListFooterComponent={() => (
//             <View>{lazyLoading && <Text>Loading...</Text>}</View>
//           )}
//           keyExtractor={uuid}
//           data={list}
//           renderItem={({item}) => <AutoCompleteItem item={item} />}
//         />
//       )}
//       {/* {error && <Text style={{ color: "red" }}>{error}</Text>} */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   AutoComplete: {
//     marginVertical: 2,
//     paddingLeft: 5,
//     borderWidth: 1,
//     borderRadius: 5,
//     justifyContent: 'center',
//     borderColor: 'black',
//     backgroundColor: 'white',
//     height: 46,
//   },
// });

import {useCallback, useMemo, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image, FlatList} from 'react-native';
import uuid from 'react-uuid';

import {Filter} from '../../models/Filter';
import {ImageHandler} from '../../utils/ImageHandler';
import {useAutoComplete} from '../../hooks/useAutoComplete';
import {Loading} from '../loading';
import {Colors} from '../../assets/theme/colors';
import {AutoCompleteItem} from './autoCompleteItem';
import {styles} from './style';

interface AutoCompleteProps {
  error?: string;
  handleChange: (text: string) => void;
  handleSelect: (item?: any) => void;
  filters?: Filter;
  touched?: boolean;
  value: string;
  loading: boolean;
}

export const AutoComplete = ({handleChange, value}: AutoCompleteProps) => {
  return (
    <View style={styles.autoComplete}>
      <View style={styles.container}>
        <View style={styles.inputHolder}>
          <Image
            style={styles.autoImage}
            source={ImageHandler('search')}
            alt=""
          />
          <TextInput
            style={styles.autoInput}
            placeholder="Search"
            value={value}
            onChangeText={handleChange}
          />
        </View>
      </View>
    </View>
  );
};
