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
 
 
 import {
   SafeAreaView,
   Text,
   View,
   Image,
   TouchableOpacity
 } from 'react-native';
 
 
 const Stack = createNativeStackNavigator();
 const App=()=>{
   return(
     <NavigationContainer style={{color:'#055E98'}}>
       <Stack.Navigator>
         <Stack.Screen name="GODSEND" component={Main} options={{headerShown: false}} />
         
         <Stack.Screen name="Login" component={Login} />
       </Stack.Navigator>
     </NavigationContainer>
   );
 
 }
 
 
 const Login=()=>{
  
   return(
     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
       <Text>LoginScreen</Text>
     </View>
   );
 };
 const Main=({navigation})=> {
   return (
     <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#055E98'}}>
       
       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
       <Image
         style={{width:300,height:300,}}
         source={require(`./assets/godsend.png`)}
       />
       <Text style={{fontSize:30,fontWeight:'bold',color:'#fff'}}>GODSEND</Text>
       </View>
       <TouchableOpacity 
       onPress={()=>navigation.navigate('Login')}
       style={{backgroundColor:'#ff3300',width:'90%',padding:20,borderRadius:5,flexDirection:'row',justifyContent:'space-between',marginBottom:50}}>
         <Text style={{fontWeight:'bold',fontSize:15,color:'#fff',fontFamily:'Tapestry-Regular'}}>Lets Begin</Text>
         <MaterialIcons name="arrow-forward-ios" fontSize={26} color="#fff"/>
       </TouchableOpacity>
       
     </SafeAreaView>
     
     
   );
 };
 
 
 
 export default App;
 
