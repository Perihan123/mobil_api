import {StyleSheet} from 'react-native';

export const homeStyle = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    backgroundColor: 'pink',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    padding: 5,
    marginBottom: 5,
  },
  header: {
    color: 'black',
    fontWeight: 'bold',
  },
  buton: {
    margin: 2,
    padding: 5,
    paddingRight: 5,
    borderWidth: 2,
    height: 50,
    borderColor: '#ccc',
    backgroundColor: '#F6E7D8',
  },
  addBtn:{
    position:'absolute',
    right:5
  },
  pagination: {
    display: 'flex',
    flexDirection: 'row',
    //backgroundColor:'aqua',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  paginateButon: {
    width: 120,
    height: 40,
    backgroundColor: '#3FA796',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 5,
    elevation: 5,
  },
  page: {
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'gray',
  },
  pageText: {
    fontWeight: 'bold',
    color: 'white',
  },
  search: {
    borderWidth: 1,
    borderColor: 'black',
    width:'75%',
  marginRight:19,
    marginHorizontal:10,
    backgroundColor:'#F7F6F2'
  },
});
