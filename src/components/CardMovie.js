import React from 'react'
import { globalStyle, theme } from '../globalStyle'
import { Text, View, StyleSheet, Image } from 'react-native';

export default function CardMovie({title, image}) {
    return (
        <View style={styles.container}>
            <Image src={image} style={styles.Capa}/>
            <Text style={styles.titleMovie}>{title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.colors.GrayLight,
        marginBottom: 16,
        borderRadius: 8
    },
    titleMovie:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },
    Capa:{
        backgroundColor:'#FFF',
        width: 50,
        height: 50,
    }
})
