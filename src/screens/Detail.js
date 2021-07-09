import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {useNavigation} from '@react-navigation/native'

export default function Detail() {
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>Detail</TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})
