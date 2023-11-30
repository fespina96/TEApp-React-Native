import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Alert, StyleSheet} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const RegistroScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
  
    const handleRegister = () => {

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

    return (
        <View style={styles.container}>
            <TextInput
                mode='outlined'
                placeholder='Email'
                keyboardType='email-address'
                onChangeText={(text) => setEmail(text)}
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
                onChangeText={(text) => setPassword(text)}
                style={styles.inputContainer}
            />
            <TextInput
                mode='outlined'
                placeholder='Confirmar Contraseña'
                secureTextEntry
                onChangeText={(text) => setPasswordConfirm(text)}
                style={styles.inputContainer}
            />
            <Button
                labelStyle={{fontSize: 20}}
                buttonColor='#c8945d'
                style={styles.button} 
                mode='contained' 
                onPress={handleRegister}
            >Registrarse</Button>
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
        marginBottom: 10,
        width: '80%',
    },
    button:{
        margin:5,
        height:40,
        width:'80%',
    }
});

export default RegistroScreen;