import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { globalStyle, theme } from '../globalStyle';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ratedStars({ valueRated }) {
    return (
        <View style={styles.containerRate}>
            <Icon name="star" color={theme.colors.Yellow} size={20} />
            <Text style={styles.textRated}>{valueRated}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerRate: {
        width: 60,
        backgroundColor: '#252634',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 5,
        borderRadius: 5
    },
    textRated: {
        fontSize: 18,
        color: '#FFF',
    }
})
