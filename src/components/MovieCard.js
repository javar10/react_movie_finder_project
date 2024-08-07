import { Link } from "react-router-dom";


const MovieCard = ({movie}) => {

  const {title, release_date, poster_path, id} = movie;
  // const releaseYear = release_date.slice(0, 4);

  return (
    <Link className='col-3' to={`/search/movie/${id}`}>
      <div className="movieCard">
          <img src={`https://image.tmdb.org/t/p/w185${poster_path}`} /> 
          <hr/>
          <div className="movieCardBody">
            <h3>{title}</h3>
            <p className="release-date">{release_date.slice(0, 4)}</p>
          </div>
      </div>
    </Link>
  )
}

export default MovieCard;