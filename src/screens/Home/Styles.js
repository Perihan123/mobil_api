import {StyleSheet} from 'react-native';

export const homeStyle = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    backgroundColor: 'pink',
    width: '96%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    padding: 5,
    margin: 5,
  },
  header: {
    color: 'black',
    fontWeight: 'bold',
  },
  buton: {
    margin: 2,
    padding: 5,
    paddingRight: 5,
    marginLeft: 10,
    marginRight: 20,
    borderWidth: 2,
    height: 50,
    borderColor: '#ccc',
    backgroundColor: '#F6E7D8',
  },
  pagination: {
    display: 'flex',
    flexDirection: 'row',
    //backgroundColor:'aqua',
    justifyContent: 'space-between',
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
    padding: 10,
    margin: 10,
    borderRadius: 25,
    marginLeft: 12,
    backgroundColor: 'gray',
  },
  pageText: {
    padding: 2,
    margin: 1,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
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
