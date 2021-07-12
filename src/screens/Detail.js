import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, StatusBar, Image, ActivityIndicator, FlatList, ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons';
import { globalStyle, theme } from '../globalStyle';
import RatedStars from '../components/ratedStars';
import { LinearGradient } from 'expo-linear-gradient';
import api from '../services/api';
import CardMovie from '../components/CardMovie';
import Loading from '../components/Loading';

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();
    const movie = route.params.movie
    const [movieDetail, setMovieDetail] = useState(null)
    const [movieRecom, setMovieRecom] = useState(null)
    const [loading, setLoading] = useState(true)

    const API_KEY = 'e621417c4c3e28d4f82b09dcfcb5ee23'
    const API_LING = 'pt-BR'

    async function loadMoviesDetail() {
        const ApiDetail = `/movie/${movie.id}?api_key=api_key=e621417c4c3e28d4f82b09dcfcb5ee23&language=pt-BR`
        //const ApiRecom = `/movie/${movie.id}/recommendations?api_key=e621417c4c3e28d4f82b09dcfcb5ee23&language=pt-BR&page=1`
        const response = await api.get(ApiDetail)
        //const responseRecom = await api.get(ApiRecom)
        setMovieDetail(response.data)
        console.log(response.data)
        //setMovieRecom(responseRecom.data)
                
    }

    function getMoviesGenres(genres) {
        let genresString = ''
        genres?.forEach(genre => {
            genresString += genre.name + " "
        });
        return genresString

    }

    useEffect(() => {
        loadMoviesDetail();
        setLoading(false)
    })


    function CardMovieDetail() {
        return (
            <View style={styles.container}>
                <Image source={{ uri: `https://image.tmdb.org/t/p/original${movie.backdrop_path}` }} style={styles.capaDetail} />

                <TouchableOpacity style={styles.topBack} onPress={() => navigation.goBack()}><Icon name="arrow-back-outline" color={'#fff'} size={25} /></TouchableOpacity>
                
                <LinearGradient
                    style={styles.containerDetail}
                    end={[0, 0.5]}
                    colors={['transparent', theme.colors.BlackBase]}>

                    <Text style={globalStyle.title}>{movie.title}</Text>
                    <Text style={globalStyle.yearMovie}>{movie.release_date.substring(0, 4)} • {getMoviesGenres(movieDetail?.genres)} • {movieDetail?.runtime + ' mins'}</Text>
                    <Text style={styles.overviewMovie}>{movie.overview}</Text>
                    <RatedStars valueRated={movie.vote_average} />
                    <View>
                        <Text style={globalStyle.title}>Also trending</Text>
                        <FlatList
                            data={movieRecom}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={item => String(item.id)}
                            renderItem={({ item }) => (
                                <CardMovie
                                    title={item.title}
                                    genre_ids={item?.genre_ids}
                                    release_date={item?.release_date}
                                    vote_average={item?.vote_average}
                                    poster_path={item?.poster_path}
                                    movie={item} />
                            )}
                        />
                    </View>
                </LinearGradient>
            </View>
        )
    }
    if (loading == true) {
        return <Loading />;
    }
    else {
        return <CardMovieDetail />
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 1200,
        backgroundColor: theme.colors.BlackBase,
        paddingTop: StatusBar.currentHeight - 20
    },
    capaDetail: {
        width: '100%',
        height: '60%',
        opacity: 0.5
    },
    containerDetail: {
        marginTop: '-60%',
        paddingTop: 50,
        paddingLeft: 60,
        paddingRight: 30,
        height: 300
    },
    topBack: {
        position: 'absolute',
        marginTop: 40,
        marginLeft: 20,
        padding: 20
    },
    overviewMovie: {
        paddingVertical: 15,
        color: '#FFF'
    }
})
