import { useMovieDataContext } from '../context';
import { useState } from 'react';

const SideBar = () => {
    const { genres,movies, setSelectedGenre } = useMovieDataContext()
    const [active, setActive] = useState('');

    const handleSelection = (genreName: string) => {

        //filter through movie data and return movies that have a matching genre
        const updatedGenres = movies?.filter(movie => {
            const isSelectedGenre = movie.genres.some(genre => {
                return genre === genreName 
            } )
            //return movie object
            return isSelectedGenre ? movie : false
        })
       
        //set active color on selected genre 
        setActive(genreName)
        //update state to show movies that have the selected genre
        setSelectedGenre(updatedGenres)
    }

    //map through genre data and list the titles in the sidebar
    return <aside style={sidebarStyle}>
        {genres?.map(genre => {
            return <span key={genre} style={sidebarItem(genre === active)} onClick={() => handleSelection(genre)}>
                {genre}
            </span>
        })}
    </aside>
}

//styling for sidebar
const sidebarStyle = {
    border: '1px solid green',
    paddingTop: 50,
    cursor: 'pointer',
    backgroundColor: 'grey'
}

const sidebarItem = (isClicked: boolean) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    color: `${isClicked ? 'white' : 'black'}`
})



export default SideBar