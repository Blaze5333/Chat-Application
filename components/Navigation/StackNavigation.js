/*eslint-disable*/
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Home from '../Home'
import ChatRoom from '../ChatRoom'

export default function StackNavigation() {
   const Tab= createStackNavigator()
  return (
 <NavigationContainer>
   <Tab.Navigator screenOptions={{headerShown:false}} initialRouteName='home'>
    <Tab.Screen options={{
        
    }} name='home' component={Home}></Tab.Screen>
    <Tab.Screen options={{
        
    }} name='chatRoom' component={ChatRoom}></Tab.Screen>
   </Tab.Navigator>
 </NavigationContainer>
  )
}
