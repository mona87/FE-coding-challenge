import { useMovieDataContext } from "../context"

const MovieCard = () => {
    const {selectedGenre } = useMovieDataContext()

    const checkImageURL = (e: React.MouseEvent<HTMLImageElement>) => {
        //if an image has an error replace the img src with the no-image.png
        const target = e.target as HTMLImageElement;
        target.src = './no-image.png'
    }

    // map through the movies data and show the image and title for each movie
    return <section style={movieStyle}>
        {selectedGenre?.map((movie) => {
            return <div key={movie.id} style={movieItem}>
                <img alt={movie.title} style={imgStyle} src={movie.posterUrl} onError={checkImageURL} />
                <div style={titleStyle}>{movie.title}</div>
            </div>
        })}
    </section>
}

//styles for movie card
const movieStyle = {
    display: "grid",
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    padding: 20
};

const movieItem = {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    display: 'flex',
    position: 'relative' as 'relative'
}

const titleStyle = {
    position: 'absolute' as 'absolute',
    bottom: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    padding: 5
}

const imgStyle = {
    display: 'flex',
    maxWidth: '100%',
    maxHeight: '100%',
}

export default MovieCard;