/*eslint-disable*/
import React, { useEffect } from 'react'
import { ImageBackground, View,Text, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native'

export default function ChatRoom({route}) {
    useEffect(
        React.useCallback(() => {
          let barData=[];
            ; // 'light-content' is also available
             StatusBar.setBackgroundColor('#007df9');}))
             
  return (
    <View style={{backgroundColor:"#1b1838",flex:1}}>
    <View style={{height:"10%",backgroundColor:"#007df9",flexDirection:'row'}}>
    <View style={{width:"80%",flexDirection:'row',alignItems:'center',padding:20}}>
       <Image style={{borderRadius:100,height:60,width:60}} source={{uri:route.params.image}}></Image>
        <Text style={{margin:10,color:'white',fontSize:20}}>{route.params.name}</Text>
        </View>
        <View style={{width:'20%',alignItems:'center',justifyContent:'center',padding:10}}>
        <TouchableOpacity>
          <Image style={{height:35,width:35}} source={require('./images/videocall.png')}></Image>
        </TouchableOpacity>
        </View>
    </View>
    <View style={{padding:10,justifyContent:'flex-end',height:"90%"}}>
    <View style={{flexDirection:"row",justifyContent:"space-evenly",alignItems:'center'}}>
        <TextInput style={{height:60,width:"85%",backgroundColor: 'rgba(52,52, 52, 0.5)',borderRadius:30,padding:20,fontSize:20}}></TextInput>
        <TouchableOpacity style={{backgroundColor:"#007df9",borderRadius:100,justifyContent:'center',alignItems:"center",height:50,width:50}}>
        <Image style={{width:30,height:30}} source={require('./images/send.png')}></Image>
        </TouchableOpacity>
        </View>
    </View>
    </View>
  )
}
