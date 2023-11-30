import React, { useState } from 'react';
import { View, Modal, ScrollView, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button, Text } from 'react-native-paper';

const PerfilScreen = () => {
    const navigation = useNavigation();
    const [emailUsuario, setEmailUsuario] = useState('');
    const [passwordUsuario, setPasswordUsuario] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [apellidoUsuario, setApellidoUsuario] = useState('');
    const [celularUsuario, setCelularUsuario] = useState('');
    const [localidadUsuario, setLocalidadUsuario] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const handleCambiosPerfil = () => {

    // After successful registration, navigate to the main screen
        if (email === emailConfirm && password === passwordConfirm) {
            // Registration successful
            Alert.alert('Success', 'Registration successful');
            navigation.navigate('LoginScreen');
        } else {
            // Display an error message if registration fails 
            Alert.alert('Error', 'Vuelva a ingresar su email y contraseña');
        }
    };

    const handleBajaUsuario = () => {
        // Proceso Baja Usuario
        };

    return (
        <View style={styles.container}>
        <ScrollView style={{width:'100%'}} contentContainerStyle={{flexGrow: 1, justifyContent: 'center', allignItems:'center'}}>
            <View style={styles.container}>
            <TextInput
                mode='outlined'
                placeholder='Email'
                keyboardType='email-address'
                onChangeText={(text) => setEmailUsuario(text)}
                style={styles.inputContainer}
            />
            <TextInput
                mode='outlined'
                placeholder='Confirmar Email'
                onChangeText={(text) => setEmailConfirm(text)}
                style={styles.inputContainer}
            />
            <TextInput
                mode='outlined'
                placeholder='Contraseña'
                secureTextEntry
                onChangeText={(text) => setPasswordUsuario(text)}
                style={styles.inputContainer}
            />
            <TextInput
                mode='outlined'
                placeholder='Confirmar Contraseña'
                secureTextEntry
                onChangeText={(text) => setPasswordConfirm(text)}
                style={styles.inputContainer}
            />
            <TextInput
                mode='outlined'
                placeholder='Nombre'
                onChangeText={(text) => setNombreUsuario(text)}
                style={styles.inputContainer}
            />
            <TextInput
                mode='outlined'
                placeholder='Apellido'
                onChangeText={(text) => setApellidoUsuario(text)}
                style={styles.inputContainer}
            />
            <TextInput
                mode='outlined'
                placeholder='Celular'
                onChangeText={(text) => setCelularUsuario(text)}
                style={styles.inputContainer}
            />
            <TextInput
                mode='outlined'
                placeholder='Localidad'
                onChangeText={(text) => setLocalidadUsuario(text)}
                style={styles.inputContainer}
            />

            <Button
                labelStyle={{fontSize: 20}}
                buttonColor='#c8945d'
                style={styles.button} 
                mode='contained' 
                onPress={handleCambiosPerfil}
            >Confirmar Cambios</Button>

        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert('Baja cancelada');
            setModalVisible(!modalVisible);
        }}>
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text variant="headlineLarge" style={styles.modalText}>¿Desea dar baja al usuario?{"\n"}
                ESTE PROCESO NO PUEDE REVERTIRSE</Text>
                <Button
                mode='contained'
                buttonColor='red'
                style={[styles.button]}
                onPress={handleBajaUsuario}
                >Confirmar Baja Usuario</Button>
            </View>
            </View>
        </Modal>
        <Button
                labelStyle={{fontSize: 20}}
                buttonColor='red'
                style={styles.buttonBaja} 
                mode='contained' 
                onPress={() => setModalVisible(true)}
            >Baja Usuario</Button>
        </View>
        </ScrollView>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        marginBottom: 8,
        width: '80%',
    },
    button:{
        margin:5,
        height:40,
        width:'80%',
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
});

export default PerfilScreen;