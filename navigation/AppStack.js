import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen';
import MessageScreen from '../screens/MessageScreen';
import MomentsScreen from '../screens/MomentsScreen';
import SettingScreen from '../screens/SettingScreen';
import AddContactScreen from '../screens/AddContact';
import CustomDrawer from '../Components/CustomDrawer';
const Drawer = createDrawerNavigator();


const HomeStack = () => {
  return (
  <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} screenOptions={{headerShown:false,
  drawerActiveBackgroundColor:'#ff3300',
  drawerActiveTintColor:'#fff',
  drawerInactiveTintColor:'#333',
  drawerLabelStyle:{marginLeft:-25,fontSize:15}}}>
  <Drawer.Screen name="Home" component={HomeScreen} options={{
  drawerIcon:({color})=>(
    <Ionicons name="home-outline" size={22} color={color}/>
  )}} />
  <Drawer.Screen name="AddConatct" component={AddContactScreen} options={{
  drawerIcon:({color})=>(
    <Ionicons name="add-outline" size={22} color={color}/>
  )}} />
   
  <Drawer.Screen name="Profile" component={ProfileScreen} options={{
  drawerIcon:({color})=>(
    <Ionicons name="person-outline" size={22} color={color}/>
  )}} />
  <Drawer.Screen name="Message" component={MessageScreen} options={{
  drawerIcon:({color})=>(
    <Ionicons name="chatbox-ellipses-outline" size={22} color={color}/>
  )}} />
  <Drawer.Screen name="Moments" component={MomentsScreen} options={{
  drawerIcon:({color})=>(
    <Ionicons name="timer-outline" size={22} color={color}/>
  )}} />
  <Drawer.Screen name="Setting" component={SettingScreen} options={{
  drawerIcon:({color})=>(
    <Ionicons name="settings-outline" size={22} color={color}/>
  )}} />
 
  </Drawer.Navigator>
  );
};

export default HomeStack;