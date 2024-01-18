import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface DetailsProps {
  onClose: () => void;
  onOk: () => void;
  title: string;
  text: string;
}

export const ModalScreen = ({ onClose, onOk, title, text }: DetailsProps) => (
  <Modal animationType={'slide'} transparent={true}>
    <View style={styles.container}>
      <View style={styles.modal}>
        {/* <Image
          style={{ margin: 10, height: 90, width: 80 }}
          alt=""
          source={ImageHandler('notification')}
        /> */}

        <Text>{title}</Text>
        <Text>{text} </Text>

        <View
          style={{
            width: '100%',
            flex: 0.2,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <TouchableOpacity onPress={onClose}>
            <Text style={{ textAlign: 'center' }}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onOk}>
            <Text>Ok</Text>
          </TouchableOpacity>
          {/* <Button onClick={onClose}>Cancel</Button> */}
          {/* <Button onClick={onOk}>OK</Button> */}
        </View>
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
    justifyContent: 'center',
    borderWidth: 1,
    padding: 15,
    margin: 40,
    borderRadius: 15,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
});
