import React from 'react';
import {View,Text,Image,TouchableOpacity,TextInput,SafeAreaView,StyleSheet} from 'react-native';
import MaterialsIcons from 'react-native-vector-icons/MaterialIcons';
import { useState } from 'react';
import { useEffect } from 'react';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
const RegisterScreen=( )=>{

const[fullName,setFullName]=useState('');
const[number,setNumber]=useState('');
const[vehileNumber,setvehicleNumber]=useState('');


const GetOTP = () => {
  if(number && number.length > 9){
  navigation.navigate('Otp', {number});
  }
  else
  alert("Please enter 10 digit phone number");
}


    return (
        <SafeAreaView style={styles.container}>
            {/* <StatusBar hidden={true}/> */}
            <View style={{marginHorizontal:25}}>
            <View style={{alignItems:'center',marginBottom:40}}>
          
            </View>
            <Text style={{fontSize:28,fontWeight:'500',color:'white',marginBottom:30,marginTop:100}}>Register</Text>
            <View style={styles.textinput}>
                <MaterialsIcons name='person' size={20} color='black' style={{marginRight:5}}/>
                <TextInput 
                placeholder="Enter Full Name" 
                style={{ flex:1,paddingVertical:0}} 
                keyboardType="default"
                value={fullName}
                onChangeText={value => setFullName(value) }
                />
                
            </View>
            <View style={styles.textinput}>
                <MaterialsIcons name='phone' size={20} color='black' style={{marginRight:5}}/>
                <TextInput placeholder="Enter Mobile No"
                 style={{ flex:1,paddingVertical:0}}
                 keyboardType="number-pad"
                 value={number}
                 onChangeText={(value) => setNumber(value)}
                 maxLength={10}
                />
            </View>
            <View style={styles.textinput}>
                <MaterialsIcons name='commute' size={20} color='black' style={{marginRight:5}}/>
                <TextInput placeholder="Enter Vehicle No"
                 style={{ flex:1,paddingVertical:0}}
                  keyboardType="default"
                  value={vehileNumber}
                  onChangeText={value => setvehicleNumber(value) }
                  />
                
            </View>
            
            
            <TouchableOpacity 
            onPress={GetOTP}

              style={styles.Registerbutton}>
              <Text style={styles.login}>Register</Text>
            </TouchableOpacity>

            <View  style={{flexDirection:'row',justifyContent:'center'}}>
              <Text style={styles.signup}>Already Registered</Text>
              <MaterialsIcons name='login' size={20} color='black' />
            <TouchableOpacity onPress={()=>navigation.goBack()}
            style={styles.loginbutton}>
              <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
    
            
    
            </View>
        
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    
            </View>
            
          
            </View>
        </SafeAreaView>
      );
  
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:'center',
      backgroundColor:'#055E98'
    },
    image:{width:225,
      height:225,
      transform:[{rotate:'-15deg'}],
    },
    textinput:{
      flexDirection:'row',
      paddingTop:5,
      paddingLeft:3,
    //borderBottomColor:'#ccc',
    borderBottomWidth:1,
    paddingBottom:10,
    backgroundColor:'white',
    borderRadius:10,
    marginBottom:30
  },
    login:{textAlign:'center',
    fontWeight:'500',
    fontSize:16,
    color:'white'
  },
  gicon:{borderColor:'#ddd',
  borderWidth:2,
  borderRadius:10,
  paddingHorizontal:30,
  paddingVertical:10,
  alignItems:'center'
  },
  loginbutton:{
  // backgroundColor:'#AD48AF',
  // padding:20,
  // paddingHorizontal:50,
  // borderRadius:10,
  // marginBottom:20,
  marginLeft:10
  },
  Registerbutton:{
    backgroundColor:'#AD48AF',
    padding:20,
    borderRadius:10,
    //marginLeft:10,
    paddingHorizontal:20,
    marginBottom:30,
    
    },
  signup: {
  textAlign:'right',
  color:'white',
  marginBottom:5,
  },
  logwith: {
    textAlign:'center',
    color:'white',
    marginBottom:30},
  

  
  });

  
  
  
  
  