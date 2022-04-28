import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './../screens/Home'
import AnimateAPI from './../screens/AnimateAPI'

const Stack = createStackNavigator()

const RootStack = () => {
  return (
    // <Stack.Navigator initialRouteName='AnimateAPI'>
    <Stack.Navigator initialRouteName="AnimateAPI">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AnimateAPI" component={AnimateAPI} />
    </Stack.Navigator>
  )
}

export default RootStack