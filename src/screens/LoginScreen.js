import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Alert, StyleSheet} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const handleLogin = () => {
    // Perform login logic here
    // You can use email and password state values
    // e.g., call an API to verify credentials

    if (email === 'example@email.com' && password === 'password') {
        // After successful login, navigate to the main screen
        navigation.navigate('UserSelection');
      } else {
        // Display an error message if login fails
        Alert.alert('Error', 'Invalid email or password');
      }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./images/teapp.jpeg')}
        style={styles.image}
      />
      <TextInput
        mode='outlined'
        placeholder='Email'
        keyboardType='email-address'
        onChangeText={(text) => setEmail(text)}
        style={styles.inputContainer}
      />
      <TextInput
        mode='outlined'
        placeholder='Contraseña'
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        style={styles.inputContainer}
      />
      <Button 
        buttonColor='#53b78e'
        style={styles.button} 
        mode='contained' 
        onPress={handleLogin}
      >Ingresar</Button>
      <Button
        buttonColor='#c8945d'
        style={styles.button} 
        mode='contained' 
        onPress={() => navigation.navigate('RegistroScreen')}
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
  image:{
    width: 230,
    height: 230,
    resizeMode: 'contain',
  },
  button:{
    margin:5,
  }
});

export default LoginScreen;