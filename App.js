import "./Components/ignoreWarnings";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import database from '@react-native-firebase/database';
import { useState } from 'react';
import { useEffect } from 'react';

import AppStack from './navigation/AppStack';
import AuthStack from './navigation/AuthStack';

 
 
 

 const Stack = createNativeStackNavigator();
 const App=()=>{
  
   return(
     <NavigationContainer style={{color:'#055E98'}}>
       
        <AuthStack/>   
     </NavigationContainer>
   );
 
 }
 
 export default App;


 
