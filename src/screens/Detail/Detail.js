import {View, Text} from 'react-native';
import React from 'react';
import {detailStyle} from './Styles';
const Detail = ({route, navigation}) => {
  console.log(route.params.user.myDate);
  return (
    <View>
      <View style={detailStyle.headerContainer}>
     
        <Text style={detailStyle.headerText}>DETAIL PAGE</Text>
      </View>
    </View>
  );
};

export default Detail;
