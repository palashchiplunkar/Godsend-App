import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
//import LoginScreen from '../screens/LoginScreen';
// import RegisterScreen from './screens/RegisterScreen';
//import OtpScreen from './screens/Otp'
// import HomeScreen from './screens/HomeScreen';

import {
  SafeAreaView,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';

const OnboardingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.maincontainer}>
      <StatusBar backgroundColor="black" barstyle="light-content" />

      <View style={styles.header}>
        {/* <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="stretch"
            /> */}
        <Animatable.View style={styles.view1} animation="bounceIn">
          <Image
            style={{
              width: height_logo,
              height: height_logo,
              resizeMode: 'cover',
              borderWidth: 2,
              borderRadius: 75,
            }}
            source={require(`../assets/godsend.png`)}
            resizeMode="stretch"
          />
          <Text style={styles.view2}>GODSEND</Text>
        </Animatable.View>
      </View>

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.title}>Stay connected with Everyone</Text>
        <Text style={styles.text}>Sign in With account</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.beginbutton}>
          <Text style={styles.begin}>Get Started</Text>
          {/* <CustomIcon name='' size={25} />  */}
          <MaterialIcons name="arrow-forward-ios" fontSize={26} color="#fff" />
        </TouchableOpacity>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#055E98',
  },
  view1: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  view2: {fontSize: 30, fontWeight: 'bold', color: '#fff'},
  beginbutton: {
    backgroundColor: '#ff3300',

    padding: 20,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
    marginTop: 10,
  },
  begin: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Tapestry-Regular',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    width: '100%',
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  text: {
    color: 'grey',
    marginTop: 5,
    fontWeight: 'bold',
  },
});
