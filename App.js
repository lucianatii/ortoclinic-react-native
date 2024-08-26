// Importação de bibliotecas
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'

// Importação das telas
import Home from './src/Telas/Home';
import Agendamentos from './src/Telas/Agendamentos';
import Clareamento from './src/Telas/Clareamento';
import FacetasR from './src/Telas/FacetasR';
import Ortodontia from './src/Telas/Ortodontia';
import Ortopediatria from './src/Telas/Ortopediatria';
import ProteseD from './src/Telas/ProteseD';
import Harmonizacao from './src/Telas/Harmonizacao';
import Listagem from './src/Telas/Listagem';
import Pagamento from './src/Telas/Pagamento';
import Sobre from './src/Telas/Sobre';
import { Text } from 'react-native-reanimated/lib/typescript/Animated';





// Criação de variáveis auxiliares
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function StackNavegacao({ navigation }) {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Agendamentos" component={Agendamentos} />
      <Stack.Screen name="Clareamento" component={Clareamento} />
      <Stack.Screen name="Facetas em Resina" component={FacetasR} />
      <Stack.Screen name="Harmonizacao" component={Harmonizacao} />
      <Stack.Screen name="Ortodontia" component={Ortodontia} />
      <Stack.Screen name="Ortopediatria" component={Ortopediatria} />
      <Stack.Screen name="Protese Dentária" component={ProteseD} />
      <Stack.Screen name="Listagem" component={Listagem} />

    </Stack.Navigator>
  )
}


export default function App() {

  return (
    <NavigationContainer initialRouteName="Home">
      <Tab.Navigator >
        <Tab.Screen name="Home" component={StackNavegacao} options={{
          headerShown: false, tabBarLabel: "",
          tabBarIcon: () => (
            <Icon name='home' color={'#00bfff'} size={30} />
          )
        }} />

        <Tab.Screen name="Agendamentos" component={Agendamentos} options={{
          headerShown: false, tabBarLabel: "",
          tabBarIcon: () => (
            <Icon2 name='clock-time-eight' color={'#00bfff'} size={30} />
          )
        }} />

        <Tab.Screen name="Pagamento" component={Pagamento} options={{
          headerShown: false, tabBarLabel: "",
          tabBarIcon: () => (
            <Icon2 name='credit-card' color={'#00bfff'} size={30} />
          )
        }} />

        <Tab.Screen name="Sobre" component={Sobre} options={{
          headerShown: false, tabBarLabel: "",
          tabBarIcon: () => (
            <Icon2 name='tooth' color={'#00bfff'} size={30} />
          )
        }} />

      </Tab.Navigator>

    </NavigationContainer>
  )
}
