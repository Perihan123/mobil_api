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
  TextInput, FlatList,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function App() {
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
  //Tıkladığımız öğeyi siler
  const pressHandler=(id)=>{
    console.log(id);
    setPeople((prevPeople)=>{
      return prevPeople.filter(person=>person.id!=id); 
    });
  }
  return (
    <View style={styles.container}>
      <FlatList
      //  numColumns={2}//İkiserli yazdirir
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>     
                 <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
   // marginHorizontal: 10, //ayırır aralarını
   // marginTop: 24,
    borderRadius:15

  }
});

export default App;
