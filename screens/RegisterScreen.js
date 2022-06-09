import React,{useState} from 'react';
import {View,Text,Image,TouchableOpacity,TextInput,SafeAreaView,StyleSheet,ScrollView,StatusBar,Alert} from 'react-native';
import MaterialsIcons from 'react-native-vector-icons/MaterialIcons';
// import { useState } from 'react';
import { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
const RegisterScreen=( {navigation})=>{

// const[fullName,setFullName]=useState('');
// const[number,setNumber]=useState('');
// const[vehileNumber,setvehicleNumber]=useState('');


// const GetOTP = () => {
//   if(number && number.length > 9){
//   navigation.navigate('Otp', {number,fullName,vehileNumber});
//   }
//   else
//   alert("Please enter 10 digit phone number");
// }

const [data, setData] = React.useState({
  mobile: ' ',
  name:' ',
  vehicle:'',
  check_textInputChange:false,
  isValidNumber:true,
  isValidUser:true,
  isValidVehicle:true
  
});

const textInputChange =(val) =>{
  const numberRe =/^[0-9]*\d$/;
  if(val.length >=10 && (numberRe.test(data.mobile)) ) {
    setData({
      ...data,
      mobile:val,
      check_textInputChange:true,
      isValidNumber:true,

    });
  }
  
  else{
    setData({
      ...data,
      mobile:val,
      check_textInputChange:false,
      isValidNumber:false,

    });
  }
}
const textVehicleChange =(val) =>{
  // const vehicleRe =/^[A-Z]{2}([ \-])[0-9]{2}[ \-][A-Z0-9]{1,2}[A-Z][\-][0-9]{4}$/;
  const vehicleRe =/^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{3}$/;
  if(val.length >=10 && (vehicleRe.test(data.vehicle)) ) {
    setData({
      ...data,
      vehicle:val,
      check_textInputChange:true,
      isValidVehicle:true

    });
  }
  
  else{
    setData({
      ...data,
      vehicle:val,
      check_textInputChange:false,
      isValidVehicle:false

    });
  }
}
const nameChange =(val) =>{
  // const userRe =/^[a-zA-Z\-]+$/;
  const userRe =/^[a-zA-Z]+[ _]*[a-zA-Z0-9@]*$/;
  if(val.length >=3 && (userRe.test(data.name)) ) {
    setData({
      ...data,
      name:val,  
      check_nameChange:true,
      isValidUser:true

    });
  }

  else{
    setData({
      ...data,
      name:val,
      check_nameChange:false,
      isValidUser:false

    });
  }
}
 

 const GetOTP = () => {
  if(data.isValidUser==true && data.isValidNumber==true && data.mobile.length !=1) {
    console.log(data.mobile)
  navigation.navigate('Otp', data.mobile ,data.name,data.vehicle);
  alert("Varification code sent to your Registerd Number");
  }
  else{
    <TouchableOpacity  disabled={true}
  style={styles.loginbutton}
  // onPress={()=> navigation.navigate('Otp')}
  onPress={GetOTP}
   >
    <Text style={styles.login}>SEND OTP</Text>
  </TouchableOpacity>
  alert("Please Enter valid Credentials");
  }
  
}
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='black' barstyle='light-content'/>
            <ScrollView  showsVerticalScrollIndicator={false} style={{marginHorizontal:25}}>
          
            
            <Text style={{fontSize:28,fontWeight:'500',color:'white',marginBottom:30,marginTop:100}}>Register</Text>
            <View  style={styles.textinput1}>
            <View style={styles.textinput}>
                <MaterialsIcons name='person' size={20} color='black' style={{marginRight:5,marginTop:5}}/>
                <TextInput placeholder="Enter Full Name" style={{ flex:1,paddingVertical:0}} keyboardType="default"
                onChangeText={(val)=> nameChange(val)}
                />
                {/* <TextInput 
                placeholder="Enter Full Name" 
                style={{ flex:1,paddingVertical:0}} 
                keyboardType="default"
                value={fullName}
                onChangeText={value => setFullName(value) }
                /> */}
                
            </View>
            {data.isValidUser? null:
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Enter a valid username</Text>
            </Animatable.View>
            }
             </View>
             <View  style={styles.textinput1}>
            <View style={styles.textinput}>
                <MaterialsIcons name='phone' size={20} color='black' style={{marginRight:5,marginTop:5}}/>
                {/* <TextInput placeholder="Enter Mobile No"
                 style={{ flex:1,paddingVertical:0}}
                 keyboardType="number-pad"
                 value={number}
                 onChangeText={(value) => setNumber(value)}
                 maxLength={10}
                /> */}
                 <TextInput placeholder="Enter Mobile No" style={{ flex:1,paddingVertical:0}} keyboardType="number-pad"
                onChangeText={(val)=> textInputChange(val)}
                />
            </View>
            {data.isValidNumber? null:
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Enter Valid Phone Number</Text>
            </Animatable.View>
            }
            </View>
            <View  style={styles.textinput1}>
            <View style={styles.textinput}>
                <MaterialsIcons name='commute' size={20} color='black' style={{marginRight:5,marginTop:5}}/>
                {/* <TextInput placeholder="Enter Vehicle No"
                 style={{ flex:1,paddingVertical:0}}
                  keyboardType="default"
                  value={vehileNumber}
                  onChangeText={value => setvehicleNumber(value) }
                  /> */}
                   <TextInput placeholder="Enter Vehicle No" style={{ flex:1,paddingVertical:0}} keyboardType="default"
                onChangeText={(val)=> textVehicleChange(val)}
                />
                
            </View>
            {data. isValidVehicle? null:
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Enter Valid vehicle  Number</Text>
            </Animatable.View>
            }
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
            
          
            </ScrollView>
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
    paddingBottom:3,
  //borderBottomColor:'#ccc',
  // borderBottomWidth:1,
  // backgroundColor:'white',
  // marginBottom:20
},
textinput1:{
  paddingLeft:3,
  borderBottomWidth:1,
  paddingBottom:10,
  borderRadius:10,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    borderRadius:10,
    marginBottom:20,
    backgroundColor:'white',
    // paddingBottom: 5
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
},
Registerbutton:{
  backgroundColor:'#AD48AF',
  padding:20,
  borderRadius:10,
  //marginLeft:90,
  paddingHorizontal:50,
  marginBottom:20,
  
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

  errorMsg: {
    paddingLeft:5,
    color: 'red',
    fontSize: 14,
    // marginTop:10,
    // marginBottom:5,
    // borderWidth:2,
    // borderColor:'red'
},


});

  
  
  
  
  