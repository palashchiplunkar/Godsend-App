import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Avatar, Title, Caption, TouchableRipple} from 'react-native-paper';

import Feather from 'react-native-vector-icons/Feather';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = ({navigation}) => {
  return (
    // <SafeAreaView style={styles.container}>
    // <SafeAreaView style={{flex:1,backgroundColor:'#055E98'}}>
    <SafeAreaView style={styles.container}>
      <ScrollView style={{padding: 20}}>
        {/* <View style={styles.container}> */}
        <View style={styles.profileBar}>
          {/* <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:5}}> */}
          <Text
            style={{fontSize: 16, fontFamily: 'Robot-Medium', color: 'white'}}>
            Profile
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu-outline" size={22} color="white" />
            {/* <MaterialIcons name="menu" fontSize={50} color="white"/> */}
            {/* <ImageBackground source={require('../assets/images/profileimg.png')} style={{width:35,height:35}} imageStyle={{borderRadius:25}}/> */}
          </TouchableOpacity>
        </View>
        <View style={styles.userInfoSection}>
          {/* <View style={{padding:20,backgroundColor:'#055E98'}}>  */}
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <ImageBackground
              source={require('../assets/images/profileimg.png')}
              style={{width: 80, height: 80, marginBottom: 10}}
              imageStyle={{borderRadius: 40}}
            />

            <View style={{marginLeft: 20}}>
              <Title style={styles.title}>Madhu Moger</Title>
              <Caption style={styles.caption}>madhu_moger</Caption>
            </View>
          </View>
        </View>
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Icon name="map-marker-radius" size={20} color="#FF6347" />
            <Text style={{color: 'white', marginLeft: 20}}>
              Mangalore,India
            </Text>
          </View>
          <View style={styles.row}>
            <Icon name="phone" size={20} color="#FF6347" />
            <Text style={{color: 'white', marginLeft: 20}}>+91-6361134190</Text>
          </View>
          <View style={styles.row}>
            <Icon name="email" size={20} color="#FF6347" />
            <Text style={{color: 'white', marginLeft: 20}}>
              madhu_moger4@gmail.com
            </Text>
          </View>
        </View>
        <View style={styles.infoBoxWrapper}>
          <View
            style={[
              styles.infoBox,
              {borderRightColor: 'white', borderRightWidth: 1},
            ]}>
            <Title style={{color: 'white'}}>Male</Title>
            <Caption style={{color: 'white'}}>Sex</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title style={{color: 'white'}}>20</Title>
            <Caption style={{color: 'white'}}>Age</Caption>
          </View>
        </View>
        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() => navigation.navigate('Editprofile')}>
            <View style={styles.menuItem}>
              <Icon name="account-check-outline" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}>Edit Profile</Text>
            </View>
          </TouchableRipple>

          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="share-outline" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}> Tell Your Friend</Text>
            </View>
          </TouchableRipple>

          <TouchableRipple onPress={() => navigation.navigate('Setting')}>
            <View style={styles.menuItem}>
              <Icon name="cog-outline" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}>Setting</Text>
            </View>
          </TouchableRipple>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#055E98',
  },
  profileBar: {
    //   paddingHorizontal: 30,
    flex: 1,
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },

  title: {
    fontSize: 24,
    //fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    color: 'white',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: 'white',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
