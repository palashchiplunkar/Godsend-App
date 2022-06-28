import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import OtpScreen from '../screens/Otp';
// import HomeScreen from '../screens/HomeScreen';
import HomeStack from './AppStack';
import EditProfileScreen from '../screens/EditProfileScreen';

import OnboardingScreen from '../screens/OnboardingScreen.js';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
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
      <Stack.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: 'GODSEND',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="Editprofile"
        component={EditProfileScreen}
        options={{
          title: 'GODSEND',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
// //authstack
