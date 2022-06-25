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
import Carousel from 'react-native-snap-carousel';
import Feather from 'react-native-vector-icons/Feather';
import BannerSlider from '../Components/BannerSlider';
import {sliderData} from '../model/data';
import {windowWidth} from '../utils/Dimensions';
import Recentitem from '../Components/Recentitem';

import {contact} from '../model/data';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AddContactScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#055E98'}}>
      <ScrollView style={{padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 5,
          }}>
          <Text
            style={{fontSize: 16, fontFamily: 'Robot-Medium', color: 'white'}}>
            Add Contact
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu-outline" size={22} color="white" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            borderColor: 'white',
            backgroundColor: 'white',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 6,
          }}>
          <Feather
            name="search"
            size={20}
            color="black"
            style={{marginRight: 5, marginTop: 3}}
          />
          <TextInput
            placeholder="Search"
            style={{flex: 1, paddingVertical: 0}}
          />
        </View>
        <TouchableOpacity style={styles.beginbutton}>
          <Text style={styles.begin}>Add Contact</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddContactScreen;
const styles = StyleSheet.create({
  beginbutton: {
    backgroundColor: '#ff3300',
    width: '50%',
    padding: 20,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 50,
    marginTop: 20,
    marginLeft: 80,
  },
  begin: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Tapestry-Regular',
  },
});
