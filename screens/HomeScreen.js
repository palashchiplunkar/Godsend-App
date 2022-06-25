import React ,{useState}from 'react';
import {View,Text,SafeAreaView,ScrollView,ImageBackground,TextInput,TouchableOpacity,BackHandler,Alert,StatusBar} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import Feather from 'react-native-vector-icons/Feather';
import BannerSlider from '../Components/BannerSlider';
import {sliderData } from '../model/data';
import {windowWidth} from '../utils/Dimensions';
import Recentitem from '../Components/Recentitem';
import { contact } from '../model/data';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'



const HomeScreen=({navigation})=>{
 
    const[contactTab,setContactTab] =useState(1);
    const renderBanner=({item,index})=>{
        return <BannerSlider data={item}/>;
    };
    const onSelectSwitch=(value)=>{
        setContactTab(value);
       
    }

    const backAction = () => {
        Alert.alert("Hold on!", "Are you sure you want to go back?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
          },
          { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
        // return true;
        return () => backHandler.remove();
      };
 
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );
 
   
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#055E98'}}>
          <StatusBar backgroundColor='black' barstyle='light-content'/>
            <ScrollView style={{padding:20}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:5}}>
                  <Text style={{fontSize:16,fontFamily:'Robot-Medium',color:'white'}}>Hello PALASH</Text>
                  <TouchableOpacity onPress={()=>navigation.openDrawer()} >
                    <Ionicons name="menu-outline" size={22} color="white"/>    
                  </TouchableOpacity>
               
                </View>

               
                <View style={{flexDirection:'row',borderColor:'white',backgroundColor:'white',borderWidth:1,borderRadius:8,paddingHorizontal:10,paddingVertical:6}}>    
                  <Feather name='search' size={20} color='black' style={{marginRight:5,marginTop:3}}/>
                  <TextInput placeholder="Search" style={{ flex:1,paddingVertical:0}} />
               
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:5,marginVertical:15}}>
                    <Text style={{fontSize:16,fontFamily:'Robot-Medium',color:'white'}}>Emergency Services Provided</Text>
                    {/* <TouchableOpacity onPress={()=>{}}>
                        <Text style={{color:'white'}}>See All</Text>
                    </TouchableOpacity> */}
                </View>
                <Carousel
                ref={(c) => { }}
                data={sliderData}
                renderItem={renderBanner}
                sliderWidth={windowWidth-40}
                itemWidth={300}
                loop={true}
                />
                <View style={{marginVertical:20}} >
                   
                    {/* CONTENT ADDED FROM CUSTOME SWITCH */}
                    <View
                    style={{
                      height: 44,
                      width: '100%',
                      flex: 1,
                      flexDirection:'row',
                      backgroundColor:'#AD40AF',
                      borderRadius: 10,
                      borderColor: '#AD40AF',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      // marginLeft:50
                     
                      }}>
                        <MaterialIcons name="person" size={22} color='white' style={{marginRight:5}}/>
                        <Text
                          style={{color:  'white' ,
                          fontSize: 20,
                          fontFamily: 'Roboto-Medium',
}}>Emergency Contact List</Text>
                     
                    </View>
                   
                </View>
                {contact.map(item=>(
                    <Recentitem key={item.id} profile={item.profile} name={item.name} number={item.number}/>
                ))}
               
            </ScrollView>
        </SafeAreaView>
    )

};

export default HomeScreen;