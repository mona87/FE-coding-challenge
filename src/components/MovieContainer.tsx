import { useEffect, useState } from "react";
import { MovieDataContext, MovieDataInterface } from "../context";
import Filter from "./Filter";
import MovieCard from "./MovieCard";

const MovieContainer = () => {

    const [movies, setMovieData] = useState<MovieDataInterface['movies']>([]);
    const [genres, setGenreData] = useState<MovieDataInterface['genres']>([]);
    const [selectedGenre, setSelectedGenre] = useState<MovieDataInterface['movies']>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                //get movie data from json 
                const res = await fetch('./movies.json')
                const data = await res.json();

                //throw error if response fails
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                //set the initial state for movies and genres
                setMovieData(data.movies);
                setGenreData(data.genres)
                setSelectedGenre(data.movies);
            }
            catch (error) {
                //show error message in console if fetch fails
                console.log(`error occurred:${error}`)
            }
        }
        fetchData();
    }, [])

    //pass genre and movie data to context to be available for other components
    return <MovieDataContext.Provider value={{ genres, movies, selectedGenre, setSelectedGenre }}>
        <main style={containerStyle} >
            <Filter />
            <MovieCard />
        </main>
    </MovieDataContext.Provider>
}

//styling for grid container
const containerStyle = {
    display: 'grid',
    gridTemplateRows: '100px 1fr',
   
}

export default MovieContainer;