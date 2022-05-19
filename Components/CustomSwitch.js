import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function CustomSwitch({
  selectionMode,
  option1,
  option2,
  icon1,
  icon2,
  onSelectSwitch,
}) {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updateSwitchData = value => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };

  return (
    <View
      style={{
        height: 44,
        width: '100%',
        backgroundColor: '#e4e4e4',
        borderRadius: 10,
        borderColor: '#AD40AF',
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(1)}
        style={{
          flex: 1,
          flexDirection:'row',
          backgroundColor: getSelectionMode == 1 ? '#AD40AF' : '#e4e4e4',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MaterialIcons name={icon2} size={20} color='black' style={{marginRight:5}}/>
        <Text
          style={{
            color: getSelectionMode == 1 ? 'white' : '#AD40AF',
            fontSize: 14,
            fontFamily: 'Roboto-Medium',
          }}>
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(2)}
        style={{
          flex: 1,
          flexDirection:'row',
          backgroundColor: getSelectionMode == 2 ? '#AD40AF' : '#e4e4e4',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
       <MaterialIcons name={icon1 } size={20} color='black' style={{marginRight:5}}/>
       <Text
          style={{
            color: getSelectionMode == 2 ? 'white' : '#AD40AF',
            fontSize: 14,
            fontFamily: 'Roboto-Medium',
          }}>
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
}