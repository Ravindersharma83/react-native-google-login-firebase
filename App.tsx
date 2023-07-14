import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DrawerNavigation from './src/Navigation/DrawerNavigation'
import GoogleLogin from './src/Screens/GoogleLogin'
import TestApi from './src/Screens/TestApi'
import PostApi from './src/Screens/PostApi'

const App = () => {
  return (
    <ScrollView>
      <PostApi/>
      <TestApi/>
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({})

