import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';
import { fetchMoviesByFilters } from '../api/MovieService';

const ResultScreen = ({ route }) => {
    const [movies, setMovies] = useState([]);
    const { genre, releaseYear, actor } = route.params;
    const [error, setError] = useState('');
    const fadeAnim = useRef(new Animated.Value(0)).current; 

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const fetchedMovies = await fetchMoviesByFilters(genre, releaseYear, actor);
                if (fetchedMovies.length > 0) {
                    setMovies(fetchedMovies);
                    Animated.timing(fadeAnim, {
                        toValue: 1, 
                        duration: 1000, 
                        useNativeDriver: true, 
                    }).start();
                } else {
                    setError('No movies found matching the criteria.');
                }
            } catch (error) {
                console.error("Error fetching movies:", error);
                setError('Failed to fetch movies. Please try again.');
            }
        };

        fetchMovies();
    }, [genre, releaseYear, actor, fadeAnim]); 

    return (
        <View style={styles.container}>
            {movies.length > 0 ? (
                movies.map(movie => (
                    <Animated.View key={movie.id} style={[styles.movieContainer, { opacity: fadeAnim }]}>
                        <Text style={styles.message}>Here is the recommended movie for you:</Text>
                        <Text style={styles.title}>{movie.title}</Text>
                        <Image source={{ uri: movie.imageUrl }} style={styles.image} resizeMode="contain" />
                    </Animated.View>
                ))
            ) : (
                <Text>{error || 'No movies found.'}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    movieContainer: {
        alignItems: 'center', 
        width: '100%', 
    },
    message: {
        fontSize: 16,
        marginBottom: 10, 
    },
    title: {
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 10, 
    },
    image: {
        width: 300, 
        height: 450, 
        marginBottom: 20, 
    },
});

export default ResultScreen;
