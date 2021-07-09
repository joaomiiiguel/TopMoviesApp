import React, { useState, useEffect } from 'react'
import { globalStyle, theme } from '../globalStyle'
import { Text, View, FlatList, TextInput, TouchableOpacity, Image } from 'react-native';
import api from '../../src/services/api'
import Icon from 'react-native-vector-icons/Ionicons';


import RatedStars from '../components/ratedStars';

export default function TopMovies({ route, navigation }) {
    const [movies, setMovies] = useState([])

    async function loadMovies() {
        const response = await api.get('/top_rated?api_key=e621417c4c3e28d4f82b09dcfcb5ee23&language=pt-BR&page=1')
        setMovies(response.data.results)
    }



    useEffect(() => {
        loadMovies();

    }, [])


    return (
        <View style={globalStyle.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5 }}>
                <Text style={globalStyle.title}>Top Movies</Text>
                <View style={{ flexDirection: 'row', width: '50%', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <TextInput
                        style={globalStyle.inputSearch}
                        onChangeText={() => { }}
                        underlineColorAndroid="transparent"
                        returnKeyLabel="search"
                        textAlign="right"
                    />
                    <Icon name="search" color={'#fff'} size={25} />
                </View>
            </View>

            <FlatList
                data={movies}
                showsVerticalScrollIndicator={false}
                keyExtractor={movie => String(movie.id)}
                renderItem={() => (
                    <TouchableOpacity style={globalStyle.container} onPress={() => navigationtoDetail(idPress)}>
                        <Image source={{ uri: `https://image.tmdb.org/t/p/original${poster_path}` }} style={globalStyle.Capa} />
                        <View style={globalStyle.containerMovie}>
                            <View>
                                <Text style={globalStyle.titleMovie}>{title}</Text>
                                <Text style={globalStyle.genreMovie}>{genre_ids}</Text>
                                <Text style={globalStyle.yearMovie}>{release_date}</Text>
                            </View>
                            <RatedStars valueRated={valueRated} />
                        </View>

                    </TouchableOpacity>
                )} />
        </View>
    )
}
