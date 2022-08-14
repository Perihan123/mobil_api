import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const data = [
  {id: '1', title: 'First item'},
  {id: '2', title: 'Second item'},
  {id: '3', title: 'Third item'},
  {id: '4', title: 'Fourth item'},
];

const Searching = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const[query,setQuery]=useState('');
  const[fullData,setFullData]=useState([])
//https://randomuser.me/api/?seed=1&page=1&results=20
  useEffect(() => {
    setIsLoading(true);
    axios
    .get('https://randomuser.me/api/?seed=1&page=1&results=20')
    .then(response => {
      const allposts = response.data;
      setData(allposts);
      setFullData(allposts)
      setIsLoading(false)
      console.log(response.data);
    })
    .catch(error => {
      setIsLoading(false);
      setError(error);
     } );
  }, []);
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="5500dc" />
      </View>
    );
  }
  if (error) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 18}}>Connection Errror!!!!</Text>
      </View>
    );
  }

  const renderHeader=()=> {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          marginVertical: 10,
          borderRadius: 20
        }}
      >
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={queryText => handleSearch(queryText)}
          placeholder="Search"
          style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
        />
      </View>
    );
  }
  

  const handleSearch = text => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(fullData, user => {
      return contains(user, formattedQuery);
    });
    setData(filteredData);
    setQuery(text);
  };
   
  const contains = ({ name, email }, query) => {
    const { first, last } = name;
   
    if (first.includes(query) || last.includes(query) || email.includes(query)) {
      return true;
    }
   
    return false;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Fovorite Contacts</Text>
      <FlatList
        data={data}
        ListHeaderComponent={renderHeader}
        keyExtractor={item => item.first}
        renderItem={({item}) => (
          <View style={styles.listItem}>
            <Image
              source={{uri: item.picture.thumbnail}}
              style={styles.coverImage}
            />
            <View style={styles.metaInfo}>
              <Text style={styles.title}>{`${item.name.first}  ${item.name.last}`}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#101010',
    marginTop: 60,
    fontWeight: '700',
  },
  listItem: {
    marginTop: 10,
    padding: 20,
    alignItems: 'center',
    backgroundColor: ' #fff',
    width: '100%',
  },
  coverImage:{
    width:100,
    height:100,
    borderRadius:8
  },
  metaInfo:{
    marginLeft:10
  },
  title:{
    fontSize:18,
    width:200,
    padding:10
  }
});
export default Searching;
