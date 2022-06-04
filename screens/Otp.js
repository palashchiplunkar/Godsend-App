import React from 'react';
import {View,Text,Image,TouchableOpacity,TextInput,SafeAreaView,StyleSheet} from 'react-native';
import MaterialsIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';

const OtpScreen = function ({ route: { params: { number } }, navigation }) {
  const [code, setCode] = useState('');
  const [submittingOtp, setSubmittingOtp] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [confirm, setConfirm] = useState(null);
 
  useEffect(() => {
    signInWithPhoneNumber();
  }, [])

  async function signInWithPhoneNumber() {
   try{
      const confirmation = await auth().signInWithPhoneNumber('+91'+number);
      alert(JSON.stringify(confirmation));
    }catch(e){
     alert(JSON.stringify(e));
   }
  }

  async function confirmCode() {
    try{
    console.log(code);
    const response = await confirm.confirm({code});
    if(response){
      navigation.navigate('HomeScreen');
      
    }
    } catch(e){
      alert(JSON.stringify(e));
    }
  }
  return (
    <SafeAreaView style={styles.container}>
        <View style={{marginHorizontal:25}}>
      
        <Text style={{fontSize:28,fontWeight:'500',color:'white',marginBottom:30}}>Enter OTP sent to your{' ' + number}</Text>
        <TextInput
          style={{
              marginBottom: 20, color: '#fff', width: '100%',
              borderBottomColor: '#f8f8f8', borderBottomWidth: 1,
          }}
          placeholder='Enter 6 digit OTP'
          placeholderTextColor="#fff" underlineColorAndroid={'transparent'}
          keyboardType="number-pad"
          value={code}
         onChangeText={value => setCode(value)}
         maxLength={6}
      />
        <TouchableOpacity 
        //  onPress={()=>navigation.navigate('Home')}
        onPress={confirmCode}
      //  onPress={() => confirmCode()}
        style={styles.submitbutton}>
        <Text style={styles.submit}>Submit</Text>
        {/* <CustomIcon name='' size={25} />  */}
        <MaterialsIcons name="login" size={25} color="#fff"/>
        </TouchableOpacity>
  
        


        </View>
    </SafeAreaView>
  );
  
}

export default OtpScreen;

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:'center',
      backgroundColor:'#055E98'
    },
    submitbutton:{
      backgroundColor:'#ff3300',
      width:'90%',
      padding:20,
      borderRadius:5,
      flexDirection:'row',
      justifyContent:'space-between',
      marginBottom:50
      },
      submit:{  
        fontWeight:'bold',
        fontSize:15,
        color:'#fff',
        fontFamily:'Tapestry-Regular'
    
  },
  });

  
  
 
  
  