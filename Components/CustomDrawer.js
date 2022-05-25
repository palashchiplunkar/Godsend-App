import React from 'react'
import {View,Text,ImageBackground,Image,TouchableOpacity} from 'react-native'

import { DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const CustomDrawer=(props)=>{
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'#055E98'}}>
                <View style={{padding:20,backgroundColor:'#055E98'}}> 
                    <ImageBackground  source={require('../assets/images/profileimg.png')} style={{width:80,height:80,marginBottom:10}} imageStyle={{borderRadius:40}}/>
                <Text style={{color:'white',fontSize:18}}>Madhu Moger</Text>
                </View>
                <View style={{flex:1,backgroundColor:'white',paddingTop:10}}>
                 <DrawerItemList {...props}/>
                </View>
                
            </DrawerContentScrollView>
        <View style={{padding:20,borderTopWidth:1,borderTopColor:'#ccc'}}>
            <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
                <View style={{flexDirection:'row',alignItems:'center',}}>

                    <Ionicons name="share-social-outline" size={22} color="#333"/>
                    <Text style={{fontSize:15,marginLeft:5,color:'#333'}}>Share</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>

                    <Ionicons name="exit-outline" size={22} color="#333"/>
                    <Text style={{fontSize:15,marginLeft:5,color:'#333'}}>Sign Out</Text>
                </View>
            </TouchableOpacity>
        </View>
        </View>
        
    )
}

export default CustomDrawer