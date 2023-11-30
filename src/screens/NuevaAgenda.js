import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Alert } from 'react-native';
import { IconButton, TextInput, Text, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const NuevaAgenda = () => {
    const navigation = useNavigation();
    const [nombreAgenda, setNombreAgenda] = useState('');
    const [tipoAgenda, setTipoAgenda] = useState('');

    const handleNuevaAgenda = () => {

        if (nombreAgenda !== null && nombreAgenda !== '' ) {
            // After successful login, navigate to the main screen
            if (tipoAgenda !== null && tipoAgenda !== '' ) {
                navigation.navigate('MainScreen');
            } else {
                Alert.alert('Error', 'Seleccionar Agenda');
            }
          } else {
            // Display an error message if login fails
            Alert.alert('Error', 'Revisar nombre de agenda');
          }
      };

    const data = [
        { id: '1', text: 'Item 1' },
        { id: '2', text: 'Item 2' },
        { id: '3', text: 'Item 3' },
        // Add more items as needed
    ];

    const renderItem = ({ item }) => (
        <View style={styles.item}>      
            <TouchableHighlight
                underlayColor="white"
                onPress={() => setTipoAgenda(item.id)}>
            <Text 
                style={{margin:5}}
                variant='headlineMedium'>Tipo Agenda {item.id}</Text>
            </TouchableHighlight>
            <View style={{marginLeft: "auto",flexDirection:'row',}}>
            <IconButton
                icon="eye"
                iconColor='white'
                containerColor='grey'
                size={20}
                onPress={() => null}
            />
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <TextInput
                mode='outlined'
                placeholder='Nombre Agenda'
                onChangeText={(text) => setNombreAgenda(text)}
                style={styles.inputContainer} 
            />

            <View style={{height:300}}>
                <FlatList
                    style={{borderStyle:'solid',borderColor:'#ccc',borderWidth:1}}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>

            <Button 
                labelStyle={{fontSize: 20}}
                buttonColor='#8494cc'
                style={styles.button} 
                mode='contained' 
                onPress={handleNuevaAgenda}
            >Añadir Agenda</Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor:'#d9e3f0',
        width:300,
        flexDirection:'row',
    },
    image:{
        flex: 1,
        justifyContent: 'center',
    },
    inputContainer: {
        width: '80%',
        margin:10,
    },
    button:{
        margin:10,
        width:'80%',
        height:40,
    },
});

export default NuevaAgenda;