import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton, Menu, PaperProvider } from 'react-native-paper';
import LoginScreen from './src/screens/LoginScreen';
import MainScreen from './src/screens/MainScreen';
import UserSelection from './src/screens/UserSelection';
import NuevaAgenda from './src/screens/NuevaAgenda';
import RegistroScreen from './src/screens/RegistroScreen';
import EditorItemsAgenda from './src/screens/EditorItemsAgenda';
import NuevoItemAgenda from './src/screens/NuevoItemAgenda';
import SesionAgenda from './src/screens/SesionAgenda';
import PerfilScreen from './src/screens/PerfilScreen';
import UsuariosVinculados from './src/screens/UsuariosVinculados';

const Stack = createStackNavigator();

const App = () => {
  
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="UsuariosVinculados" 
        screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen options={{ headerShown: false}} name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen options={({navigation})=>({ 
          headerLeft:()=> (
            <PaperProvider>
              <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<IconButton
                          icon='menu'
                          onPress={openMenu}/>}>
                <Menu.Item onPress={() => {}} title="Perfil"/>
                <Menu.Item onPress={() => {}} title="Ayuda"/>
                <Menu.Item onPress={() => {}} title="Contactanos"/>
              </Menu>
            </PaperProvider>
          ), 
          title:'Agendas',
          headerRight: () => (
            <IconButton
            icon="plus"
            iconColor='white'
            containerColor='teal'
            size={20}
            onPress={() => {navigation.navigate('NuevaAgenda');}}
            />
          ),
          })} name="MainScreen" component={MainScreen} />
        <Stack.Screen options={{ headerLeft:()=> null, title:'Seleccionar Usuario'}} name="UserSelection" component={UserSelection}/>
        <Stack.Screen options={{ headerLeft:()=> null, title:'Nueva Agenda'}} name="NuevaAgenda" component={NuevaAgenda}/>
        <Stack.Screen options={{ headerLeft:()=> null, title:'Registrarse'}} name="RegistroScreen" component={RegistroScreen}/>
        <Stack.Screen options={({navigation})=>({ 
          headerLeft:()=> null, 
          title:'Items Agenda #X',
          headerRight: () => (
            <IconButton
            icon='plus'
            iconColor='white'
            containerColor='teal'
            size={20}
            onPress={() => {navigation.navigate('NuevoItemAgenda');}}
            />
          ),
          })} name="EditorItemsAgenda" component={EditorItemsAgenda}/>
        <Stack.Screen options={{ headerLeft:()=> null, title:'Nuevo Item'}} name="NuevoItemAgenda" component={NuevoItemAgenda}/>
        <Stack.Screen options={{ headerLeft:()=> null, title:'Sesión'}} name="SesionAgenda" component={SesionAgenda}/>
        <Stack.Screen options={{
          headerLeft:()=> null,
          title:'Perfíl',
          }} name="PerfilScreen" component={PerfilScreen}/>
        <Stack.Screen options={{ headerLeft:()=> null, title:'Usuarios Vinculados'}} name="UsuariosVinculados" component={UsuariosVinculados}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;