/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
 import LoginScreen from './screens/LoginScreen'; 
 import OtpScreen from './screens/Otp'
import RegisterScreen from './screens/RegisterScreen'; 
import HomeScreen from './screens/HomeScreen'
import database from '@react-native-firebase/database';
import { useState } from 'react';
import { useEffect } from 'react';

 
 
 import {SafeAreaView,StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native';

 const Stack = createNativeStackNavigator();
 const App=()=>{
  
   return(
     <NavigationContainer style={{color:'#055E98'}}>
       <Stack.Navigator>
         <Stack.Screen name="Main" component={Main} options={{headerShown: false}} />
         
         <Stack.Screen name="Login" component={LoginScreen}   options={{
          title: "GODSEND",
          headerTitleStyle:{
          fontWeight:'bold',
          },
           headerBackVisible:false
          }}/>
           <Stack.Screen name="Register" component={RegisterScreen} options={{
          title: "GODSEND",
          headerTitleStyle:{
          fontWeight:'bold',
          },
           headerBackVisible:false
          }} />
          <Stack.Screen name="Otp" component={OtpScreen} options={{
          title: "GODSEND",
          headerTitleStyle:{
          fontWeight:'bold',
          },
           headerBackVisible:false
          }} />
           <Stack.Screen name="Home" component={HomeScreen} options={{
          title: "GODSEND",
          headerTitleStyle:{
          fontWeight:'bold',
          },
           headerBackVisible:false
          }} />
       </Stack.Navigator>
     </NavigationContainer>
   );
 
 }
 


 const Main=({navigation})=> {
   return (
     <SafeAreaView style={styles.maincontainer}>
       
       <View style={styles.view1}>
       <Image
         style={{width:300,height:300,}}
         source={require(`./assets/godsend.png`)}
       />
       <Text style={styles.view2}>GODSEND</Text>
       </View>
       <TouchableOpacity 
       onPress={()=>navigation.navigate('Login')}
       style={styles.beginbutton}>
         <Text style={styles.begin}>Lets Begin</Text>
         <MaterialIcons name="arrow-forward-ios" fontSize={26} color="#fff"/>
       </TouchableOpacity>
       
     </SafeAreaView>
     
     
   );
 };
 
 export default App;

 const styles = StyleSheet.create({
  maincontainer: 
  {flex:1,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'#055E98'
  },
  view1:
  {flex:1,
  justifyContent:'center',
  alignItems:'center'
  },
  view2:
  {fontSize:30,
    fontWeight:'bold',
    color:'#fff'
  },
  beginbutton:
  {backgroundColor:'#ff3300',
  width:'90%',
  padding:20,
  borderRadius:5,
  flexDirection:'row',
  justifyContent:'space-between',
  marginBottom:50
  },
  begin:{
  fontWeight:'bold',
  fontSize:15,
  color:'#fff',
  fontFamily:'Tapestry-Regular'
  }
});
 
