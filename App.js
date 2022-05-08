/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

<<<<<<< HEAD
const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.login}>Login</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a424d',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    backgroundColor: 'white',
    width: '75%',
    height: '50%',
    borderRadius: 20,
  },
  login: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default App;
=======
 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
 import LoginScreen from './screens/LoginScreen'; 
 
 
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
 
>>>>>>> 8b8ee1d1cc0e0eecd6878110983be4d52a6063be
