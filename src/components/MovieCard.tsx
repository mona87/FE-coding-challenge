import { useMovieDataContext } from "../context"

const MovieCard = () => {
    const { movies } = useMovieDataContext()

    const checkImageURL = (e: any) => {
        //if an image has an error replace the img src with the no-image.png
        e.target.src = './no-image.png'
    }

    // map through the movies data and show the image and title for each movie
    return <section style={movieStyle}>
        {movies?.map((obj, i) => {
            return <div key={obj.id} style={movieItem}>
                <img alt={obj.title} style={imgStyle} src={obj.posterUrl} onError={checkImageURL} />
                <div style={titleStyle}>{obj.title}</div>
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