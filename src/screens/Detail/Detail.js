import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {detailStyle} from './Styles';
const Detail = ({route, navigation}) => {
  const {data} = route.params;
  return (
    <View style={detailStyle.container}>
      <View style={detailStyle.headerContainer}>
        <Text style={detailStyle.headerText}>DETAIL PAGE</Text>
      </View>

      <View style={detailStyle.detailContainer}>
        <Text style={detailStyle.contentHeader}> {data.title} </Text>
        <Text style={detailStyle.contentBody}>{data.body}</Text>
      </View>
      <View style={{ display:'flex',alignItems:'center',justifyContent:'center'}}>
        <TouchableOpacity style={{width:120,height:40,backgroundColor:'#3FA796',borderRadius:5,evaluation:5}} onPress={()=>navigation.navigate('Home')}>
          <Text
            style={{
              fontWeight: 'bold',
              alignSelf:'center',
              margin:8,
              color:'white',
                          }}>
            Geri
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Detail;
