import React from 'react';
import { View, FlatList, StyleSheet, ImageBackground } from 'react-native';
import {IconButton, Text, Button} from 'react-native-paper';

const EditorItemsAgenda = () => {

  const data = [
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' },
    // Add more items as needed
  ];

  const renderItem = ({ item }) => (
      <View style={styles.item}>
        <ImageBackground source={require('./images/teapp.jpeg')} resizeMode="cover" style={styles.image}>
        <View style={{flexDirection:"row"}}>
        <View style={{marginRight: "auto", width:50 ,height:100}}>
        <IconButton
            icon="arrow-up-bold"
            iconColor='white'
            containerColor='orange'
            size={20}
            onPress={() => console.log('Pressed')}
        />
        <IconButton
            icon="arrow-down-bold"
            iconColor='white'
            containerColor='orange'
            size={20}
            onPress={() => console.log('Pressed')}
        />      
        </View>

        <Text style={{marginRight: 'auto', marginTop:10, width:'70%'}} variant="titleLarge"> Item {item.id}</Text>

        <View style={{marginLeft: "auto",marginTop:"auto",flexDirection:"row", width:100}}>
          <IconButton
            icon="pencil"
            iconColor='white'
            containerColor='#4caf50'
            size={20}
            onPress={() => console.log('Pressed')}
          />
          <IconButton
            icon="delete"
            iconColor='white'
            containerColor='#bf4061'
            size={20}
            onPress={() => console.log('Pressed')}
          />
        </View>
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
        buttonColor='#53b78e'
        style={styles.button} 
        mode='contained' 
        onPress={()=>null}
      >Confirmar Cambios</Button>
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
    borderTopWidth: 1,
    borderTopColor: 'grey',
    display:'flex',
    maxHeight:102,
  },
  image:{
    justifyContent: 'center',
  },
  button:{
    margin:5,
  }
});

export default EditorItemsAgenda;