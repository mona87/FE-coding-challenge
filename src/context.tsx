import { createContext, useContext } from "react";

export type MovieDataInterface = {
    genres: string[] | [],
    movies: {
        id: number;
        title: string;
        year: string;
        runtime: string;
        genres: string[];
        director: string;
        actors: string;
        plot: string;
        posterUrl: string;
    }[] | [];
    selectedGenre: MovieDataInterface['movies'] | [];
    setSelectedGenre: (m: MovieDataInterface['movies']) => void;
}

//create context with MovieDataInterface
export const MovieDataContext = createContext<MovieDataInterface>({
    genres: [],
    movies: [
        {
            id: 0,
            title: '',
            year: 'string',
            runtime: 'string',
            genres: [],
            director: '',
            actors: '',
            plot: '',
            posterUrl: '',
        }
    ],
    selectedGenre: [],
    setSelectedGenre: () => {}
});

export const useMovieDataContext = () => useContext(MovieDataContext);