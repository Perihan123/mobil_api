import React, { useState } from 'react';
import { StyleSheet,View,Button, Text, TouchableOpacity, TextInput } from 'react-native';

export default function AddTodo({addHandler}) {
    const[text,setText]=useState('')
const changeHandler=(val)=>{
setText( val);
}
    return (
        <View>
            <TextInput style={styles.input}
            placeholder='Yeni Yapılacaklar...'
            onChangeText={changeHandler} />
            <Button onPress={()=>addHandler(text)} title='Ekle' color='coral'/>
        </View>
    )
}

const styles = StyleSheet.create({
input:{
  marginBottom:10,
  paddingHorizontal:8,
  paddingVertical:6,
  borderBottomWidth:1,
  borderBottomColor:'#ddd'

    
}
})