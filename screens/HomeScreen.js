import React ,{useState}from 'react';
import {View,Text,SafeAreaView,ScrollView,ImageBackground,TextInput,TouchableOpacity,BackHandler,Alert} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import Feather from 'react-native-vector-icons/Feather';
import BannerSlider from '../Components/BannerSlider';
import {sliderData } from '../model/data';
import {windowWidth} from '../utils/Dimensions';
import Recentitem from '../Components/Recentitem';
import CustomSwitch from '../Components/CustomSwitch';
import { recentcontact } from '../model/data';
import { contact } from '../model/data';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'



const HomeScreen=({navigation})=>{
    // disableBackButton=()=>{
    //     BackHandler.e 
    // }

    
    
    
        
     
    

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
            <ScrollView style={{padding:20}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:5}}>
                <Text style={{fontSize:16,fontFamily:'Robot-Medium',color:'white'}}>Hello Palash</Text>
                <TouchableOpacity onPress={()=>navigation.openDrawer()} >
                    <Ionicons name="menu-outline" size={22} color="white"/>
                    {/* <MaterialIcons name="menu" fontSize={50} color="white"/> */}
                    {/* <ImageBackground source={require('../assets/images/profileimg.png')} style={{width:35,height:35}} imageStyle={{borderRadius:25}}/> */}
                </TouchableOpacity>
               
                </View>

                
                <View style={{flexDirection:'row',borderColor:'white',backgroundColor:'white',borderWidth:1,borderRadius:8,paddingHorizontal:10,paddingVertical:6}}>    
                <Feather name='search' size={20} color='black' style={{marginRight:5,marginTop:3}}/>
                <TextInput placeholder="Search" style={{ flex:1,paddingVertical:0}} />
                
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:5,marginVertical:15}}>
                    <Text style={{fontSize:16,fontFamily:'Robot-Medium',color:'white'}}>Emergency Contacts</Text>
                    <TouchableOpacity onPress={()=>{}}>
                        <Text style={{color:'white'}}>See All</Text>
                    </TouchableOpacity>
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
                    <CustomSwitch selectionMode={1} option1="Recent" option2="contacts" icon1="person" icon2="phone"
                    onSelectSwitch={onSelectSwitch}/>
                </View>
                {contactTab==1 && recentcontact.map(item=>(
                    <Recentitem key={item.id} profile={item.profile} name={item.name} number={item.number}/>
                )) }
                {/* <Text>Recent</Text> */}
                {/* <Recentitem/> */}
                {contactTab==2 && contact.map(item=>(
                    <Recentitem key={item.id} profile={item.profile} name={item.name} number={item.number}/>
                ))}
                
            </ScrollView>
        </SafeAreaView>
    )

};

export default HomeScreen;


