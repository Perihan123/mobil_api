import React from 'react';
import {StyleSheet,Text,View} from  'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>Yapılacaklar Listem</Text>
        </View>
    )
}

const styles=StyleSheet.create({
header:{
    height:80,
    paddingTop:38,
    backgroundColor:'coral'
 
},
title:{
    textAlign:'center',
    justifyContent:'center',
    fontWeight:'bold',
    fontSize:20,
    color:'white',
}
})