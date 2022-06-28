import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  BackHandler,
  Alert,
  StatusBar,
  StyleSheet,
} from 'react-native';
import ProfileScreen from '../screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const EditProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barstyle="light-content" />
      <ScrollView style={{padding: 20}}>
        <View style={styles.editBar}>
          <Text
            style={{fontSize: 16, fontFamily: 'Robot-Medium', color: 'white'}}>
            EditProfileScreen
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Ionicons name="menu-outline" size={22} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#055E98',
  },
  editBar: {
    //   paddingHorizontal: 30,
    flex: 1,
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
