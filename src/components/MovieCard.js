


const MovieCard = ({movie}) => {

  const {title, release_date, poster_path} = movie;
  // const releaseYear = release_date.slice(0, 4);

  return (
    <div className="movieCard col-3">
        <img src={`https://image.tmdb.org/t/p/w185${poster_path}`} /> 
        <hr/>
        <div className="movieCardBody">
          <h3>{title}</h3>
          <p className="release-date">{release_date.slice(0, 4)}</p>
        </div>
        
    </div>
  )
}

export default MovieCard;