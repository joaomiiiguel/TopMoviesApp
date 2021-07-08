import React from 'react'
import { globalStyle, theme } from '../globalStyle'
import { Text, View } from 'react-native';

export default function Home() {
    return (
        <View style={globalStyle.container}>
            <Text style={globalStyle.title}>Home</Text>
        </View>
    )
}
