import {StyleSheet} from 'react-native';

export const homeStyle = StyleSheet.create({
  headerContainer: {
    display:'flex',
    backgroundColor:'pink',
    width:'96%',
    height:40,
    justifyContent:'center',
    alignItems:'center',
    elevation:5,
    padding:5,
    margin:5

  },
  header: {
    color:'black',
    fontWeight:'bold',
  },
  buton:{
    margin:2,
    marginLeft:10,
    marginRight:10,
    borderWidth:2,
    borderColor:'#ccc'
  },
  pagination:{
    display:'flex',
    flexDirection:'row',
    backgroundColor:'aqua'
  }
});
