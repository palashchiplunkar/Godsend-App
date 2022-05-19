import React from 'react';
import {View,Text,Image,TouchableOpacity,TextInput,SafeAreaView,StyleSheet} from 'react-native';
import MaterialsIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


const OtpScreen=({navigation})=>{
  return (
    <SafeAreaView style={styles.container}>
        <View style={{marginHorizontal:25}}>
      
        <Text style={{fontSize:28,fontWeight:'500',color:'white',marginBottom:30}}>Enter OTP</Text>
        
        <TouchableOpacity 
        onPress={()=>navigation.navigate('Home')}
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

  
  
  
  
  