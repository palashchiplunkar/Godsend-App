import React from 'react';
import {View,Text,Image,TouchableOpacity,TextInput,SafeAreaView,StyleSheet} from 'react-native';
import MaterialsIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';






const LoginScreen=()=>{
    return (
        <SafeAreaView style={styles.container}>
            <View style={{marginHorizontal:25}}>
            <View style={{alignItems:'center',marginBottom:40}}>
            <Image
            style={styles.image}
            source={require(`./assets/images/login.png`)}
            />
            </View>
            <Text style={{fontSize:28,fontWeight:'500',color:'#333',marginBottom:30}}>Login</Text>
            <View style={styles.textinput}>
                <MaterialsIcons name='phone' size={20} color='black' style={{marginRight:5}}/>
                <TextInput placeholder="Enter Mobile No" style={{ flex:1,paddingVertical:0}} keyboardType="numeric"/>
            </View>
            {/* <View style={styles.textinput}>
                <Ionicons name='ios-lock-closed-outline' size={20} color='white' style={{marginRight:5}}/>
                <TextInput placeholder="password" style={{ flex:1,paddingVertical:0}} 
                secureTextEntry={true}/>
                <TouchableOpacity  onPress={()=>{} }>
                  <Text style={{color:'white',fontWeight:'500'}}>Forget?</Text>
    
                </TouchableOpacity>
            </View> */}
            <Text style={styles.signup}>if not Registered?</Text>
            <View  style={{flexDirection:'row',justifyContent:'space-between'}}>
            <TouchableOpacity onPress={()=>{}} 
            style={styles.loginbutton}>
              <Text style={styles.login}>SEND OTP</Text>
            </TouchableOpacity>
    
            <TouchableOpacity onPress={()=>{}} 
            style={styles.Registerbutton}>
              <Text style={styles.login}>Register</Text>
            </TouchableOpacity>
    
            </View>
        
            <Text style={styles.logwith}>or login with....</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <TouchableOpacity 
            onPress={()=>{}}
            style={styles.gicon}>
            <Image
            style={{width:20,height:20}}
            source={require(`./assets/images/google.png`)}
            />
    
            </TouchableOpacity>
    
            <TouchableOpacity 
            onPress={()=>{}}
            style={styles.gicon}>
            <Image
            style={{width:30,height:30}}
            source={require(`./assets/images/facebook-icon.png`)}
            />
    
            </TouchableOpacity>
    
            <TouchableOpacity 
            onPress={()=>{}}
            style={styles.gicon}>
            <Image
            style={{width:30,height:30}}
            source={require(`./assets/images/twitter.png`)}
            />
    
            </TouchableOpacity>
    
            </View>
            
          
            </View>
        </SafeAreaView>
      );
  
}

export default LoginScreen;

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
    marginBottom:25,
    
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
  backgroundColor:'#AD48AF',
  padding:20,
  paddingHorizontal:50,
  borderRadius:10,
  marginBottom:20,
  },
  Registerbutton:{
    backgroundColor:'#AD48AF',
    padding:20,
    borderRadius:10,
    marginLeft:60,
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
  
  
  
  
  });