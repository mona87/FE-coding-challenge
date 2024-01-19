import { useMovieDataContext } from '../context';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Filter = () => {
    const { genres, movies, setSelectedGenre } = useMovieDataContext()
    const [value, setValue] = useState<string | null >(genres[0]);

    const handleSelection = (genreName: string | null) => {

      
        if(genreName === null) setSelectedGenre(movies)
        else{
        //filter through movie data and return movies that have a matching genre
        const updatedGenres = movies?.filter(movie => {
            const isSelectedGenre = movie.genres.some(genre => {
                return genre === genreName
            })
            //return movie object
            return isSelectedGenre ? movie : false
        }) 
        //update state to show movies that have the selected genre
        setSelectedGenre(updatedGenres)
    }
    }

    //map through genre data and list the titles in the sidebar
    return <section style={filterStyle}>
            <Autocomplete
      disablePortal
      id="combo-box"
      options={genres}
      sx={{ width: 300, background: "#ffffff", height: 50, borderRadius: 2}}
      renderInput={(params) => <TextField {...params} label="Movie" />}
      value={value}
      onChange={(event: any, newValue: string | null ) => {
        setValue(newValue);
        handleSelection(newValue)
      }}
    />
    </section>
}

//styling for sidebar
const filterStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: 'pointer',
    background: "#fff",
    position: 'sticky' as 'sticky',
    width: '100',
    zIndex: 100,
    height: 100,
    boxShadow: "0px 10px 10px rgb(0 0 0 / 0.2)"
}



export default Filter