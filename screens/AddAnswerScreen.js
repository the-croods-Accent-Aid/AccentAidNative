import React, { useState } from 'react';
import { View, Text, TextInput,TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../components/Button';

const Tag = ({title}) => {
  return <TouchableOpacity style = {{backgroundColor : "#B4DBFF", paddingVertical : 5, paddingHorizontal : 10, borderRadius : 15, margin : 5}}>
  <Text style = {{fontWeight:'bold', fontSize : 20}}>{title}</Text>
</TouchableOpacity>
}


const AddAnswerScreen = () => {
  const nav = useNavigation()
  return <View style = {{flex : 1, backgroundColor : 'white'}}>
    <TextInput style = {{padding: 8,
        borderWidth: 1,
        borderColor: '#B4DBFF',
        borderRadius: 4,
        padding :10,
        margin: 15,}} placeholder='Enter Question' />
    <TextInput 
      style = {{padding: 8,
        borderWidth: 1,
        borderColor: '#B4DBFF',
        borderRadius: 4,
        padding :10,
        margin: 15,}}
    placeholder='Enter Description' />
    <View style = {{flexDirection : 'row', padding : 10, flexWrap : "wrap"}} >
      <Tag title= "Pronunciation"/>
      <Tag title= "Mock Interviews"/>
      <Tag title= "Grammar"/>
      <Tag title= "Vocubulary"/>   
    </View>
    <View style = {{paddingHorizontal : 10, margin : 10}}>
    <Button onpress={() => {
      nav.navigate("QuestionList")
    }} title='Ask'/>
    </View>
    

  </View>

}

export default AddAnswerScreen