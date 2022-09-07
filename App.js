import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';
import User from './User';

export default function App() {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  return (
    <View style={styles.container}>
      <Text>Hello react native app!</Text>
      <Text>Total friends : {users.length}</Text>
      {
        users.map(user => <User user={user}>{user.name}</User>)
      }
      <Text style={{fontSize:40}}>{name}</Text>
      <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      <StatusBar style="auto" />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        onChangeText={text => setName(text)}
        defaultValue=""
      />
       <Image
        source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
        style={{width: 200, height: 200}}
      />
      <Text>Hello, I am your cat!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
