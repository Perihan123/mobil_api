/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useState} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Button,
   TextInput
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 
 function App(){
   //const[name,setName]=useState('Perihan');
   //const[age,setAge]=useState('30');
   const [people,setPeople]=useState([
     {name:'Perihan',key:'1'},
     {name:'Ali',key:'2'},
     {name:'Derya',key:'3'},
     {name:'Beyza',key:'4'},
     {name:'Asu',key:'5'},
     {name:'Nazlı',key:'6'},
     {name:'Sezer',key:'7'},
 
 
   ])
   return (
    <View style={styles.container}>
     <ScrollView>
    {people.map((item)=>{
    return(
      <View>
        <Text style={styles.item}>{item.name}</Text>
      </View>
    )})}
    </ScrollView>
    </View>
   );
 };
 
 const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    paddingTop:40,
    paddingHorizontal:20
  }, 
  
  input:{
    borderWidth:4,
    borderColor:'#000',
    padding:8,
    margin:50,
    width:200,
    backgroundColor:'#808080'
  },
  item:{
    marginTop:24,
    padding:30,
    backgroundColor:'gray',
    fontSize:24,
    //borderRadius:15
 
  }
 });
 
 export default App;
 