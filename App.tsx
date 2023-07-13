import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DrawerNavigation from './src/Navigation/DrawerNavigation'
import GoogleLogin from './src/Screens/GoogleLogin'
import TestApi from './src/Screens/TestApi'

const App = () => {
  return (
    <View>
      <TestApi/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})

