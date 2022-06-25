import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Switch,
  StyleSheet,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Drawer, TouchableRipple} from 'react-native-paper';

const CustomDrawer = props => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#055E98'}}>
        <View style={{padding: 20, backgroundColor: '#055E98'}}>
          <ImageBackground
            source={require('../assets/images/profileimg.png')}
            style={{width: 80, height: 80, marginBottom: 10}}
            imageStyle={{borderRadius: 40}}
          />
          <Text style={{color: 'white', fontSize: 18}}>Madhu Moger</Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'white', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <Drawer.Section
        title="Prefernce"
        style={{borderTopWidth: 1, borderTopColor: '#ccc', fontWeight: 'bold'}}>
        <TouchableRipple
          onPress={() => {
            toggleTheme();
          }}>
          <View style={styles.preference}>
            <Text style={{fontWeight: 'bold'}} imageStyle={{borderRadius: 40}}>
              Dark Theme
            </Text>
            <View pointerEvents="none" style={{fontWeight: 'bold'}}>
              <Switch value={isDarkTheme} />
            </View>
          </View>
        </TouchableRipple>
      </Drawer.Section>
      <Drawer.Section>
        <View style={{borderTopWidth: 1, borderTopColor: '#ccc'}}>
          <DrawerItem
            icon={({color, size}) => (
              <Ionicons name="share-social-outline" size={22} color="#333" />
            )}
            label="Share"
            style={{paddingVertical: 10}}
            onPress={() => {}}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Ionicons name="exit-outline" size={22} color="#333" />
            )}
            label="Sign Out"
            onPress={() => {
              props.navigation.navigate('Login');
            }}
          />
        </View>
      </Drawer.Section>
    </View>
  );
};

export default CustomDrawer;
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontWeight: 'bold',
  },
});
