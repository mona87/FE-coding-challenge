import { useEffect, useState } from "react";
import { MovieDataContext, MovieDataInterface } from "../context";
import SideBar from "./SideBar";
import MovieCard from "./MovieCard";

const MovieContainer = () => {

    const [movies, setMovieData] = useState<MovieDataInterface['movies'] | undefined>();
    const [genres, setGenreData] = useState<MovieDataInterface['genres'] | undefined>();

    useEffect(() => {
        const fetchData = async () => {
            try{
                //get movie data from json and set the initial state for movies and genres
                const res = await fetch('./movies.json')
                const data = await res.json();
                setMovieData(data.movies);
                setGenreData(data.genres)
            }
            catch{
                //show error message in console if fetch fails
                console.log('error occurred')
            }
        }
        fetchData();
    }, [])

    //pass genre and movies data to context to be available for other components
    return <MovieDataContext.Provider value={{ genres, movies }}>
        <main style={containerStyle} >
            <SideBar />
            <MovieCard />
        </main>
    </MovieDataContext.Provider>

}

//styling for grid container
const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
}

export default MovieContainer;