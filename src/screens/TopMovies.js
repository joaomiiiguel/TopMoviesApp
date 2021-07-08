import React, { useState, useEffect } from 'react'
import { globalStyle, theme } from '../globalStyle'
import { Text, View, FlatList } from 'react-native';
import api from '../../src/services/api'

import Movie from '../components/CardMovie'

///top_rated?api_key=e621417c4c3e28d4f82b09dcfcb5ee23&language=pt-BR&page=1

export default function TopMovies() {
    const [movies, setMovies] = useState([])



    return (
        <View style={globalStyle.container}>
            <Text style={globalStyle.title}>Top Movies</Text>
            <FlatList
                data={[1,2,3,4,5,6,7,8,9]}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => String(item)}
                renderItem={({ item }) => (
                    <Movie title={item.title} capa={item.capa} />
                )}>
            </FlatList>
        </View>
    )
}
