/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/

import React, { useState } from 'react';
import {
    TouchableWithoutFeedback,
    StyleSheet,
    Text,
    Keyboard,
    Alert,
    View,

    FlatList,
    ScrollView

} from 'react-native';
import AddTodo from './AddTodo';


import Header from './Header';
import TodoItem from './TodoItem';

function App() {

    const [todos, setTodos] = useState([
        { text: 'Sabah uyan kahvaltını yap.', id: '1' },
        { text: 'Hazırlan okula git derse yetiş.', id: '2' },
        { text: 'Öğle arası yemeğini ye.', id: '3' },
        { text: 'Okuldan çık dikkkatlice evine geri dön.', id: '4' }
    ])

    const pressHandler = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.id != id);
        }
        );
    }
    const addHandler = (text) => {

        if (text.length > 3) {
            setTodos((prevTodos) => {
                return [
                    { text: text, id: Math.random.toString() },
                    ...prevTodos,

                ]

            })
        }
        else {
            //ALERT KULLANIMI
            //İlki alert başlıgı ikincisi açıklama
            Alert.alert('DUR!', 'Kelime uzunluğu yeterli değildir..', [
                { text: 'Anlaşılamadı', onPress: () => console.log('alert kapatıldı') }
            ]);
        }

    }
    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();//Klavyeyi devre dışı bırakır.
            console.log('Dismissed keyboard');
        }}>
            <View style={styles.container}>
            {/*Header */}
            <Header />
            <View style={styles.content}>
                {/*to form */}
                <AddTodo addHandler={addHandler} />
                <View style={styles.list}>
                    <FlatList
                        data={todos}
                        renderItem={({ item }) => (
                            <TodoItem item={item} pressHandler={pressHandler} />
                        )} />
                </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    content: {
        flex:1,
        padding: 40,
        backgroundColor:'#FF92D8'
    },
    list: {
        flex:1,
         //marginTop: 20,
        // backgroundColor: '#f2f2f8',
        //  borderRadius: 15,
        //elevation: 8
    },
    item: {
        padding: 15,
    }

});

export default App;
