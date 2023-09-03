import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    FlatList
} from 'react-native';
import React, {useState} from 'react';

export default function App() {

    const [list,
        setList] = useState([]);
    const [item,
        setItem] = useState('');

    const handleAdd = () => {
        if (item.trim() !== '') {
            setList([
                ...list,
                item
            ]);
            setItem('');
        }
    };

    const handleClear = () => {
        setList([]);
        setItem('');
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>

                <TextInput
                    style={styles.input}
                    placeholder="Enter the item"
                    value={item}
                    onChangeText={text => setItem(text)}/>
                <Button title="Add" onPress={handleAdd}/>
                <Button title="Clear" onPress={handleClear}/>
                <Text style={styles.title}>Shopping List</Text>
            </View>
            <FlatList
                data={list}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => <Text>{item}</Text>}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    content: {
        marginBottom: 50
    },
    input: {
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 5,
        padding: 5
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20
    },
});