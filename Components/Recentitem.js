import { StackRouter } from '@react-navigation/native';
import React from 'react';
import {View, Image,Text,ScrollView,TouchableOpacity} from 'react-native';

import { windowWidth } from '../utils/Dimensions';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import MaterialsIcons from 'react-native-vector-icons/MaterialIcons';


export default function Recentitem({profile,name,number,option2,
    icon1,}) {
  return (
   
    <ScrollView>
       
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:20,}}>
            <View style={{flexDirection:'row',alignItems:'center',flex:1}}>
                <Image source={profile} style={{width:55,height:55,borderRadius:10,marginRight:8}}/>
                <View style={{width:windowWidth}}>
                    <Text style={{
                        color:'white',
                        fontSize:17,
                        }}>{name}</Text>
                    <Text
                    numberOfLines={1}
                    style={{
                    color:'white',
                    fontSize:17,
                    textTransform:'uppercase'
                    }}>{number}</Text>
                </View>
            </View>
            <MaterialsIcons name='arrow-forward-ios' size={20} color='white' style={{marginRight:5}}/>
        </View>
    </ScrollView>
   
  );
}
