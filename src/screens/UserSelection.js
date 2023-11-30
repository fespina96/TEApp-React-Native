import React from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const users = [
  { id: '1', name: 'User 1' },
  { id: '2', name: 'User 2' },
  { id: '3', name: 'User 3' },
  // Add more users as needed
];

const UserSelectionScreen = ({ navigation }) => {
  const handleUserSelection = (user) => {
    // Handle the selected user, for example, navigate to a details screen
    navigation.navigate('MainScreen', { user });
  };

  const renderUserItem = ({ item }) => (
    <TouchableOpacity style={styles.userItem} onPress={() => handleUserSelection(item)}>
      <Image
        source={require('./images/imgUser.png')}
        style={styles.image}
      />
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={{
          maxHeight:100,
        }}
        data={users}
        renderItem={renderUserItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userItem: {
    alignItems: 'center',
    padding: 20,
  },
  image:{
    width: 60, 
    height: 60, 
    borderRadius: 60/ 2,
  },
});

export default UserSelectionScreen;