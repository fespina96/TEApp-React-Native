import React, {useState} from 'react';
import { View, FlatList, StyleSheet, ImageBackground, Modal } from 'react-native';
import { IconButton, Text, Button} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';

const UsuariosVinculados = () => {

  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [codigoVinculacion, setCodigoVinculacion] = useState('');

  const data = [
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' },
    // Add more items as needed
  ];

  const handleVincularUsuario = () => {
    // Perform login logic here
    // You can use email and password state values
    // e.g., call an API to verify credentials

    if (codigoVinculacion !== null && codigoVinculacion !== '') {
        // Proceso Vinculacion
      } else {
        // Display an error message if login fails
        Alert.alert('Error', 'Codigo de vinculación vacio');
      }
  };

  const renderItem = ({ item }) => (
      <View style={styles.item}>
        <View style={{flexDirection:'row'}}>
        <Text style={{height:40,marginTop:5}} variant="headlineMedium">Usuario Vinculado {item.id}</Text>

        <View style={{marginLeft: "auto",flexDirection:"row"}}>
              <IconButton
                icon="delete"
                iconColor='white'
                containerColor='#bf4061'
                size={20}
                onPress={() => console.log('Pressed')}
              />
        </View>

        </View>
      </View>
  );

  return (
    <View style={styles.container}>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
        }}>
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <TextInput
                    mode='outlined'
                    placeholder='Codigo de Vinculación'
                    onChangeText={(text) => setCodigoVinculacion(text)}
                    style={styles.inputContainer}
                />
                <Button
                mode='contained'
                buttonColor='purple'
                style={[styles.buttonBaja]}
                onPress={handleVincularUsuario}
                >Vincular Nuevo Usuario</Button>
            </View>
            </View>
        </Modal>
      <Button
          labelStyle={{fontSize: 20}}
          buttonColor='#8494cc'
          style={styles.button} 
          mode='contained' 
          onPress={() => setModalVisible(true)}>Vincular Nuevo Usuario</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    allignItems:'center'
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image:{
    flex: 1,
    justifyContent: 'center',
  },
  button:{
    margin:10,
    height:40,
    },
    buttonBaja:{
        margin:5,
        height:40,
        width:'80%',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width:'80%',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    inputContainer: {
        marginBottom: 10,
        width: '90%',
      },
});

export default UsuariosVinculados;