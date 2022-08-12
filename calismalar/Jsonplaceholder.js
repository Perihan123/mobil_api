import { View, Text, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react';
import axios from 'axios'

const Jsonplaceholder = () => {
    //Veriyi tutacaım değişken
    const [myData, setMyData] = useState([]);
 const getPosts= async()=>{
  axios
  .get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    const allposts = response.data;
    setMyData(allposts);
    console.log(response.data);
  })
  .catch(error => console.log(error));
    
 }
 useEffect(()=>{
   getPosts();
 },[])


  return (
    <View>
      <Text>Jsonplaceholder</Text>
      {
        myData.map((item)=>{
           return <Text>{item.title}</Text>
        })
      }
    </View>
  )
}

export default Jsonplaceholder