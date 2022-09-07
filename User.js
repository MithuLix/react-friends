import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function User(props) {
    return (
        <View style = {styles.container}>
            <Text>{props.user.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: 'purple',

    }
})
