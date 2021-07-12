import React, { useState, useEffect } from 'react'
import { globalStyle, theme } from '../globalStyle'
import { Text, View, FlatList, TextInput, TouchableOpacity, Image } from 'react-native';
import api from '../../src/services/api'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'

import CardMovie from '../components/CardMovie';
import Loading from '../components/Loading';

import HomeIcon from '../../assets/home.png'
import TopIcon from '../../assets/topmovies.png'
import TrailerIcon from '../../assets/trailer.png'
import StatisticsIcon from '../../assets/statistics.png'


export default function TopMovies() {
    const [movies, setMovies] = useState()
    const navigation = useNavigation();
    const [pageCurrent, setPageCurrent] = useState(1)
    const [loading, setLoading] = useState(true)

    const API_KEY = 'e621417c4c3e28d4f82b09dcfcb5ee23'
    const API_LING = 'pt-BR'
    
    //Carrega as informações da API
    async function loadMovies() {
        const listTopMovie = `/movie/top_rated?api_key=${API_KEY}&language=${API_LING}&page=${pageCurrent}`
        const response = await api.get(listTopMovie)
        setMovies(response.data.results)
        
    }
   

    useEffect(() => {
        loadMovies();
        setLoading(false)
    }, [])

    function ListMovie() {
        return (
            <FlatList
                data={movies}
                showsVerticalScrollIndicator={false}
                keyExtractor={movie => String(movie.id)}
                renderItem={({ item: movie }) => (
                    <CardMovie
                        title={movie.title}
                        genre_ids={movie.genre_ids}
                        release_date={movie.release_date}
                        vote_average={movie.vote_average}
                        poster_path={movie.poster_path}
                        movie={movie} />
                )}
            />
        )
    }

    return (
        <View style={globalStyle.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5, marginHorizontal: 25, }}>
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

            {(loading == true) ?  <Loading/> :  <ListMovie />}

            <View style={globalStyle.tabar}>
                <TouchableOpacity style={globalStyle.btnTabar}><Image source={HomeIcon} style={{ width: 20, height: 20 }} /></TouchableOpacity>
                <TouchableOpacity style={globalStyle.btnTabar}><Image source={TopIcon} style={{ width: 20, height: 20 }} /></TouchableOpacity>
                <TouchableOpacity style={globalStyle.btnTabar}><Image source={TrailerIcon} style={{ width: 20, height: 20 }} /></TouchableOpacity>
                <TouchableOpacity style={globalStyle.btnTabar}><Image source={StatisticsIcon} style={{ width: 20, height: 20 }} /></TouchableOpacity>
            </View>


        </View>
    )
}
