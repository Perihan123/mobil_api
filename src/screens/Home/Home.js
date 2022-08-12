import {View, Text, TouchableOpacity, Alert, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Detail from '../Detail/Detail';
import {homeStyle} from './Styles';
const Jsonplaceholder = ({navigation, route}) => {
  //Veriyi tutacaım değişken
  const [pagination, setPagination] = useState([10]);
  const [loading, setLoading] = useState(false);
  const [myData, setMyData] = useState([]);
  const [click,setClick]=useState(null)
  const getPosts = async () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const allposts = response.data;
        setMyData(allposts);
        console.log(response.data);
      })
      .catch(error => console.log(error));
  };
  useEffect(() => {
    setLoading(true);
    getPosts();
  }, []);
  const handleClick = () => {
  
    navigation.navigate('Detail',{
      user: {
        //id: 'jane',
        //firstName: 'Jane',
        //lastName: 'Done',
        //age: 25,
        
      },
    })
  };
  return (
    <ScrollView>
      <View style={homeStyle.headerContainer}>
        <Text style={homeStyle.header}>HEADER</Text>
      </View>
      {myData.map(item => {
        return (
          <TouchableOpacity style={homeStyle.buton} onPress={handleClick}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        );
      })}
      <View style={homeStyle.pagination}>
        <TouchableOpacity>
          <Text>Geri</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>İleri</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Jsonplaceholder;
