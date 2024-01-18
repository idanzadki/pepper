import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ErrorProps {
  onOk: () => void;
  title: string;
  text: string;
}

export const ErrorModal = ({ onOk, title, text }: ErrorProps) => (
  <Modal animationType={'slide'} transparent={true}>
    <View style={styles.container}>
      <View style={styles.modal}>
        {/* <Image
          style={{ margin: 10, height: 90, width: 80 }}
          alt=""
          source={ImageHandler('notification')}
        /> */}

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text} </Text>

        <TouchableOpacity style={{ margin: 20 }} onPress={onOk}>
          <Text style={{ fontSize: 20 }}>Ok</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    // justifyContent: 'center',
    borderWidth: 1,
    padding: 15,
    marginVertical: '40%',
    marginHorizontal: '20%',
    borderRadius: 15,
  },
  title: {
    color: '#3f2949',
    fontSize: 30,
    margin: 20,
    fontWeight: 'bold',
  },
  text: {
    color: '#3f2949',
    fontSize: 15,
    marginTop: 10,
    fontWeight: 'bold',
  },
});
