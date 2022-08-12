import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'


export default function TodoItem({ item, pressHandler }) {

    return (
        <TouchableOpacity>
            <View style={styles.item}>
                {/*İcon kullanımı önce kutuphane sonra isim seklinde yapılır..
                 */}
                <Icon name='close-o' size={30} color="#900"  onPress={() => pressHandler(item.id)}  />
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )

}
const styles = StyleSheet.create({
    item: {
        flex:1,
        flexDirection:'row',
        margin:4,
        padding: 16,
        marginTop: 10,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        backgroundColor: '#EEECEC'
    },
    itemText:{
        marginLeft:10,
    }
})