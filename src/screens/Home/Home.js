import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import filter from "lodash.filter"
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Detail from '../Detail/Detail';
import {homeStyle} from './Styles';
import { CommonActions } from '@react-navigation/native';
const Jsonplaceholder = ({navigation, route}) => {
  //Veriyi tutacaım değişken
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [myData, setMyData] = useState([]);//verilerimi kaydettiğim state
  const[error,setError]=useState(null);
  const [search, setSearch] = useState(null);
 const [query,setQuery]=useState('');
 const[fullData,setFullData]=useState([]);
  const perPage = 10;

  const getPosts = async () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const allposts = response.data;
        setMyData(allposts);
        setLoading(false)
        console.log(response.data);
      })
      .catch(error => {
        setLoading(false);
        setError(error);
       } );
  };

  useEffect(() => {
    setLoading(true);
    getPosts();
  }, []);

  const handleClick = data => {
    navigation.navigate('Detail', {
      data,
    });
  };
  if(loading){
    return (
      <View style={{display:'flex',flex:1,Jsonplaceholder:'center',alignItems:'center'}}>
        <ActivityIndicator size="large" color="#5500dc"/>
        <Text>Loading...</Text>
      </View>
    )
  }
  if(error){
    return(
      <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Text style={{fontSize:18}}>
          Error fetching data ....Check your network connection!

        </Text>
      </View>
    )
  }

  const nextPage = () => {
    const a = myData.length / (page + 1);
    if (a === perPage) {
      Alert.alert('Bitti');
    } else setPage(page + 1);
  };
 const handleSearch=text =>{

const unique=data.filter(test)

}

 
  return (
    <ScrollView>
      <View style={homeStyle.headerContainer}>
        <Text style={homeStyle.header}>HEADER</Text>
      </View>
      <View style={{backgroundColor:'#fff',padding:10,marginVertical:10,borderRadius:20}}>
      <TextInput autoCapitalize='none'
      autoCorrect={false}
      clearButtonMode="always"
      value={query}
      onChangeText={queryText=>handleSearch(queryText)}
      placeholder="Search"
      style={{backgroundColor:'#fff',paddingHorizontal:20}}/>        
      </View>
      {myData.slice(page * perPage, (page + 1) * perPage).map(item => {
        return (
          <TouchableOpacity
            key={item.id}
            style={homeStyle.buton}
            onPress={() => handleClick(item)}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View
                style={{
                  margin: 5,
                  marginRight: 10,
                  width: 30,
                  height: 30,
                  backgroundColor: 'pink',
                  borderRadius: 20,
                  elevation: 5,
                }}>
                <Text
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: 5,
                    fontWeight: 'bold',
                    padding: 4,
                  }}>
                  {item.id}
                </Text>
              </View>
              <Text
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 8,
                  flexShrink: 1,
                }}>
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
      <View style={homeStyle.pagination}>
        <TouchableOpacity
          style={homeStyle.paginateButon}
          disabled={page === 0}
          onPress={() => setPage(page - 1)}>
          <Text style={{color: 'white'}}>Geri</Text>
        </TouchableOpacity>
        <View style={homeStyle.page}>
          <Text style={homeStyle.pageText}> {page + 1}</Text>
        </View>
        <TouchableOpacity style={homeStyle.paginateButon} onPress={nextPage}>
          <Text style={{color: 'white'}}>İleri</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Jsonplaceholder;
