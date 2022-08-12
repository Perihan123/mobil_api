import React from 'react'
import { Text, View, StyleSheet } from 'react-native'


export default function FlexBox() {
    return (
        <View style={styles.container}>
            <Text style={styles.bir}>Bir</Text>
            <Text style={styles.iki}>İki</Text>

            <Text style={styles.uc}>Üç</Text>

            <Text style={styles.dort}>Dört</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       //flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end', 
        paddingTop: 40,
        backgroundColor: '#ddd'
    },
    bir:{
        backgroundColor:'violet',
        padding:10,
         
    },
    iki:{
        backgroundColor:'gold',
        padding:20,
    },
    uc:{
        backgroundColor:'coral',
        padding:30,
    },
    dort:{
        backgroundColor:'skyblue',
        padding:40
    }
})