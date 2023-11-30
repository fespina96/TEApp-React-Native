import React, {useState} from 'react';
import { View, FlatList, StyleSheet, ImageBackground } from 'react-native';
import { IconButton, Text, Button} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {

  const navigation = useNavigation();
  const [agendaSelect, setAgendaSelect] = useState('');

  const data = [
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' },
    // Add more items as needed
  ];

  const handleInicioAgenda = () => {

    if (agendaSelect !== null && agendaSelect !== '' ) {
        // After successful login, navigate to the main screen
            navigation.navigate('sesionAgenda');

      } else {
        // Display an error message if login fails
        Alert.alert('Error', 'Revisar nombre de agenda');
      }
  };

  const renderItem = ({ item }) => (
      <View style={styles.item}>
        <ImageBackground source={require('./images/teapp.jpeg')} resizeMode="cover" style={styles.image}>
        <Text>Agenda {item.id}</Text>

        <View style={{marginLeft: "auto",flexDirection:"row"}}>
              <IconButton
                icon="pencil"
                iconColor='white'
                containerColor='#4caf50'
                size={20}
                onPress={() => navigation.navigate('EditorItemsAgenda')}
              />
              <IconButton
                icon="delete"
                iconColor='white'
                containerColor='#bf4061'
                size={20}
                onPress={() => console.log('Pressed')}
              />
        </View>
        </ImageBackground>
      </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button
          labelStyle={{fontSize: 20}}
          buttonColor='#8494cc'
          style={styles.button} 
          mode='contained' 
          onPress={handleInicioAgenda}>Confirmar Inicio Agenda</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
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
});

export default MainScreen;