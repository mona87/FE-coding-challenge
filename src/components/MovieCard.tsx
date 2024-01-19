import { useMovieDataContext } from "../context"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Fade from '@mui/material/Fade';


const MovieCard = () => {
    const { selectedGenre } = useMovieDataContext()

    const checkImageURL = (e: React.MouseEvent<HTMLImageElement>) => {
        //if an image has an error replace the img src with the no-image.png
        const target = e.target as HTMLImageElement;
        target.style.height = '20px';

        target.src = './no-image.png';
    }
console.log(selectedGenre)
    // map through the movies data and show the image and title for each movie
    return <section >
        <ImageList style={movieStyle}  >
  {selectedGenre.filter(movie => movie.posterUrl).map((movie) => (
      <Fade in={true}><ImageListItem style={{ boxShadow: "0px 10px 10px rgb(0 0 0 / 0.2)"}} key={movie.id}>
      <img
        src={movie.posterUrl}
        alt={movie.title}
        style={{objectFit:"none", minHeight: 375}}
        loading="lazy"
        onError={(e: React.MouseEvent<HTMLImageElement>)=>{checkImageURL(e)}}
      />
       <ImageListItemBar position="below" sx={{backgroundColor: "#1F1717", color: "#F4BF96", padding: "0 10px"}} title={movie.title}
/>
    </ImageListItem>
    </Fade>
  ))}
</ImageList>
    </section>
}

//styles for movie card
const movieStyle = {
    display: "grid",
    justifyContent: "center",
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 200px))',
    gap: '20px',
    marginTop: 120

};



export default MovieCard;