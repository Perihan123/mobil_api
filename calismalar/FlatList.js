/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Button,
   TextInput, FlatList, TouchableOpacity
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 
 function App() {
  const[]
   //const[name,setName]=useState('Perihan');
   //const[age,setAge]=useState('30');
   const [people, setPeople] = useState([
     { name: 'Perihan', id: '1' },
     { name: 'Ali', id: '2' },
     { name: 'Derya', id: '3' },
     { name: 'Beyza', id: '4' },
     { name: 'Asu', id: '5' },
     { name: 'Nazlı', id: '6' },
     { name: 'Sezer', id: '7' },
 
 
   ])
   return (
     <View style={styles.container}>
       <View>
       <FlatList
       
       keyExtractor={(item) => item.id}
       data={people}
       renderItem={({ item }) => (
      <TouchableOpacity>
         <View style={styles.items}>
         <Text style={styles.item}>{item.name}</Text>
       </View>
      </TouchableOpacity>

       )} />
       <TextInput style={styles.search}>

       </TextInput>
       </View>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   container:{
    width:"100%",
    height:"100%",
    backgroundColor:"#fffccc"

   },
   items:{
    display:'flex',
    flexDirection:"row",
    padding:10,
    margin:5,
   },
   item:{
    fontWeight:"bold",
    margin:2,
    backgroundColor:"#c6c6c6",
    width:"50%",


   },
   search:{
    display:"flex",
    width:120,
    height:30,
    backgroundColor:"#f9f9f9",
    alignSelf:"center",
    borderBottomColor:"#000",
    borderWidth:1,
    elevation:5,
    borderRadius:5

   }
   
 });
 
 export default App;
 