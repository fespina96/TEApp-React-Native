import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import { TextInput, Button } from 'react-native-paper';

const NuevoItemAgenda = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imgDesc, setImgDesc] = useState('');

  const selectImageHandler = () => {
    ImagePicker.launchImageLibrary({}, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setSelectedImage({ uri: response.assets[0].uri });
      }
    });
  };

  const handleNuevoItem = () => {

    if (imgDesc !== null && imgDesc !== '' ) {
        // After successful login, navigate to the main screen
        if (selectedImage !== null && selectedImage !== '' ) {
            navigation.navigate('EditorItemsAgenda');
        } else {
            Alert.alert('Error', 'Seleccionar Imagen');
        }
      } else {
        // Display an error message if login fails
        Alert.alert('Error', 'Ingresar descripción');
      }
  };

  return (
    <View style={styles.container}>
        {selectedImage && <Image source={selectedImage} style={styles.image} />}
        
        
        <TextInput
            mode='outlined'
            placeholder='Descripción item'
            onChangeText={(text) => setDescItem(text)}
            style={styles.inputContainer} 
        />
        <Button 
            labelStyle={{fontSize: 20}}
            buttonColor='#8494cc'
            style={styles.button} 
            mode='contained' 
            onPress={selectImageHandler}>Seleccionar Imagen</Button>
        <Button 
            labelStyle={{fontSize: 20}}
            buttonColor='#8494cc'
            style={styles.button} 
            mode='contained' 
            onPress={handleNuevoItem}>Confirmar Item</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 200,
  },
  button:{
    margin:10,
    width:'80%',
    height:40,
  },
  inputContainer: {
    width: '80%',
    margin:10,
  },
});

export default NuevoItemAgenda;