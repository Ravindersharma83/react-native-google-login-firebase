import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DrawerNavigation from './src/Navigation/DrawerNavigation'
import GoogleLogin from './src/Screens/GoogleLogin'
import TestApi from './src/Screens/TestApi'
import PostApi from './src/Screens/PostApi'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
  <NavigationContainer>
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={PostApi} />
    <Stack.Screen name="Details" component={TestApi} />
  </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})



