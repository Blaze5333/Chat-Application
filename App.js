/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  requireNativeComponent,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  useColorScheme,
  
  View,
} from 'react-native';
import ChatRoom from './components/ChatRoom';
import Home from './components/Home';
import StackNavigation from './components/Navigation';





function App() {
  return(
   <StackNavigation></StackNavigation>
  )
}

export default App;
