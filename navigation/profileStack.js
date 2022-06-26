import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
const profileStack=createNativeStackNavigator();
const ProfileStack = () => {
    return (
    
        
    <profileStack.Navigator>
      <profileStack.Screen
        name="profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />

      {/* <ProfileStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'GODSEND',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackVisible: false,
        }}
      />
      <ProfileStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: 'GODSEND',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackVisible: false,
        }}
      />
      <ProfileStack.Screen
        name="Otp"
        component={OtpScreen}
        options={{
          title: 'GODSEND',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackVisible: false,
        }}
      />
      <ProfileStack.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: 'GODSEND',
          headerTitleStyle: {
            fontWeight: 'bold',
        
          },
          headerBackVisible: false,
        }}
      /> */}
    </profileStack.Navigator>
  );
    };
    export default ProfileStack;