/*eslint-disable*/
import React, { useEffect, useState } from 'react'
import { StatusBar,View,FlatList,Image,TouchableOpacity,Text } from 'react-native';

export default function Home({navigation}) {
    useEffect(
        React.useCallback(() => {
          let barData=[];
            ; // 'light-content' is also available
             StatusBar.setBackgroundColor('#007df9');}))
             
    const [data, setdata] = useState([
        {
        name:"Person 1",
        image:"https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"
      },
      {
        name:"Person 2",
        image:"https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg"
      },
      {
        name:"Person 3",
        image:"https://cloudfront-us-east-2.images.arcpublishing.com/reuters/43YAWLITTZJLZIQTCP2JSS4KSM.jpg"
      },
      {
        name:"Person 4",
        image:"https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960"
      },
      {
        name:"Person 1",
        image:"https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"
      },
      {
        name:"Person 2",
        image:"https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg"
      },
      {
        name:"Person 3",
        image:"https://cloudfront-us-east-2.images.arcpublishing.com/reuters/43YAWLITTZJLZIQTCP2JSS4KSM.jpg"
      },
      {
        name:"Person 4",
        image:"https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960"
      },
      
    ])
    
      return (
        <View style={{backgroundColor:"#1b1838",flex:1}}>
        <View style={{height:"12%",backgroundColor:'#007df9',borderBottomEndRadius:30,borderBottomStartRadius:30,padding:20,flexDirection:'row',alignItems:"center"}}>
          <Image style={{height:70,width:70,borderRadius:100,marginRight:10}} source={require('./images/download.jpg')}></Image>
          <Text style={{color:"white",fontSize:30,fontWeight:'bold'}}>Mustafa</Text>
        </View>
        <View style={{backgroundColor:"#1b1838",height:"88%",justifyContent:"center",alignItems:"center"}}>
          {data&&<FlatList data={data}
            renderItem={({item})=>(
              <TouchableOpacity onPress={()=>{navigation.navigate('chatRoom',{image:item.image,name:item.name})}} style={{padding:10,justifyContent:'center',alignItems:'center',width:"100%"}}>
              <View style={{height:80,backgroundColor: 'rgba(51, 52, 52, 0.6)',zIndex: 100,flexDirection:'row',alignItems:'center',padding:20,borderRadius:20,width:"100%",minWidth:"100%"}}>
               <Image style={{height:60,width:60,borderRadius:100,marginRight:20}} source={{uri:item.image}} ></Image>
               <View>
               <Text style={{color:"white"}}>{item.name}</Text>
               <Text>You: Hello,how are you</Text>
              </View>
              </View>
              </TouchableOpacity>
            )}
          />}
          <TouchableOpacity style={{alignItems:'flex-end',justifyContent:'flex-end',padding:20,width:"100%"}} >
            <View style={{backgroundColor:"#007df9", borderRadius:100,height:80,width:80,justifyContent:"center",alignItems:"center"}}>
          <Image style={{height:35,width:35,tintColor:"white"}} source={require('./images/chataddicon.png')}></Image>
            </View>
          </TouchableOpacity>
        </View>
        </View>
        )
}
