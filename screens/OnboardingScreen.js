
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import LoginScreen from '../screens/LoginScreen'; 
// import RegisterScreen from './screens/RegisterScreen'; 
//import OtpScreen from './screens/Otp'
// import HomeScreen from './screens/HomeScreen';

import {SafeAreaView,Text,View,Image,StyleSheet, TouchableOpacity} from 'react-native';


const OnboardingScreen=({navigation})=> {
    return (
      <SafeAreaView style={styles.maincontainer}>
        
        <View style={styles.view1}>
        <Image
          style={{width:300,height:300,}}
          source={require(`../assets/godsend.png`)}
        />
        <Text style={styles.view2}>GODSEND</Text>
        </View>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('Login')}
        style={styles.beginbutton}>
          <Text style={styles.begin}>Lets Begin</Text>
          {/* <CustomIcon name='' size={25} />  */}
          <MaterialIcons name="arrow-forward-ios" fontSize={26} color="#fff"/>
        </TouchableOpacity>
        
      </SafeAreaView>
      
      
    );
  };

  export default OnboardingScreen;

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