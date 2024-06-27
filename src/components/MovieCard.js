


const MovieCard = ({movie}) => {

  const {title, release_date, poster_path} = movie;

  return (
    <div className="movieCard">
        <h2>{title}</h2>
        <p>{release_date}</p>
        <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} />
    </div>
  )
}

export default MovieCard;