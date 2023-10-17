import { createContext, useContext } from "react";

export type MovieDataInterface = {
    genres: string[] | undefined,
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
    }[] | undefined
}

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
]
  });
  
  export const useMovieDataContext = () => useContext(MovieDataContext);