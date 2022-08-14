# SETUP
 - npx react-native init <ProjeAdı> --version 0.66.4
 - https://reactnative.dev/docs/environment-setup
 - ## navigation
 - https://reactnavigation.org/docs/getting-started/
 - npm install @react-navigation/native
 - npm install react-native-screens react-native-safe-area-context
 - npm install @react-navigation/native-stack

## FUNCTİONS
 ### pagination
  ##### view
  - Flatlist data içerisinde `Array.slice(page * perPage, (page + 1) * perPage)`
  - İlerei geri butonların `page` state ini güncelleyecek
  - page state i 0 dan başlıyacak ekrana yazılırken +1 eklenecek
  - geri butonunda page 0 sa page i değiştirmeyecek
  - ileri butonunda şu fonksiyon yazılır. 
  - `const totalPage = myData.length / perPage;
    if (totalPage - 1 <= page) {
      Alert.alert('Bitti');
    } else setPage(page + 1);`
##### filter
 - apiden alınan veri sabit olarak bir yerde tutulsun(Ana data) birde filter için değişen state tutulur.
 - ana data da hiçbirşey değişmez ama tüm fonksiyonlar anadata üzerinden yazılır.
 - `const filteredData = baseData.filter(data => data.title.includes(query));
    filterData(filteredData);`
