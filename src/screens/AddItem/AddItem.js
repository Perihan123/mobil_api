import React, { useEffect, useState } from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

const AddItem = ({route}) => {
    const {myData,setMyData,id} = route.params;
    useEffect(()=>{
        console.log(myData);
    },[myData]);
  const [values,setValues] = useState({
    id:id + 1,
    title:"",
    body:""
  });
  
  const handleAdd = () =>{
    if(values.title && values.body ){
        setMyData([...myData,{...values}]);
    }
  }
    return (
    <View>
      <Text>Add Item</Text>
      <TextInput 
        value={values.title}
        onChangeText={(val)=>setValues({...values,title:val})}
      />
      <TextInput 
        value={values.body}
        onChangeText={(val)=>setValues({...values,body:val})}
      />
      <TouchableOpacity onPress={handleAdd}>
        <Text>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItem;
