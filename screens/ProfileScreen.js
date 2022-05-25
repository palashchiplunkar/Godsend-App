import React from 'react'


import {View,Text,SafeAreaView,ScrollView,ImageBackground,TextInput,TouchableOpacity,StyleSheet} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import Ionicons from 'react-native-vector-icons/Ionicons'

const ProfileScreen=({navigation})=>{
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'#055E98'}}>
        <ScrollView style={{padding:20}}>
            
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:5}}>
                <Text style={{fontSize:16,fontFamily:'Robot-Medium',color:'white'}}>Profile</Text>
                <TouchableOpacity onPress={()=>navigation.openDrawer()} >
                <Ionicons name="menu-outline" size={22} color="white"/>
                {/* <MaterialIcons name="menu" fontSize={50} color="white"/> */}
                {/* <ImageBackground source={require('../assets/images/profileimg.png')} style={{width:35,height:35}} imageStyle={{borderRadius:25}}/> */}
            </TouchableOpacity>
           
            </View>

            
            
            
           
            
        </ScrollView>
    </SafeAreaView>
    )
}

export default ProfileScreen