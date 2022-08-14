import {StyleSheet} from 'react-native';

export const detailStyle = StyleSheet.create({
  container:{
   display:'flex',
   width:'100%',
   height:'100%',
   backgroundColor:'#ccc'
  },
  headerContainer:{
    display:'flex',
    backgroundColor:'#C65D7B',
    width:'96%',
    height:40,
    justifyContent:'center',
    alignItems:'center',
    elevation:5,
    padding:5,
    margin:5
  },
  headerText:{
    color:"black",
    fontWeight:"bold"
  },
  detailContainer:{
     display:'flex',
     flexDirection:'column',
     height:'80%',
     margin:20,
     backgroundColor:'#F6E7D8',
     justifyContent:'center',
     alignItems:'center',
     elevation:5

  },
  contentHeader:{
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'bold',
    margin:15,
    marginTop:0,
    fontSize:20
    
  },
  contentBody:{
   fontSize:16,
  margin:5,
  padding:6
  }
});
