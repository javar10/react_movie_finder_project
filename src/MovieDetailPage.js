
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";



const MovieDetailPage = () => {

  const {movieId} = useParams();
  const apiKey = process.env.REACT_APP_TMDB_API_KEY;
  const [movieData, setMovieData] = useState({});

  const backgroundStyle = {
    backgroundImage: `url('https://image.tmdb.org/t/p/original${movieData.backdrop_path}')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '400px'
  };

  console.log('logging from MovieDetailPage', movieData);

  useEffect(() => {
    const getMovieDetails = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
        const data = await res.json();
        console.log("loggin data from useEffect:", data);
        setMovieData(data);

    }
    getMovieDetails();
  }, [])

  return (
    <div>
      {movieData && (      
        <div style={backgroundStyle} className="movieDetailsCard">         
          <div className="movieDetailsText">
            <h2>{movieData.title} <span className="release-date">({movieData.release_date})</span></h2>
            <h4>{movieData.tagline}</h4>
            <p>{movieData.overview}</p>
            <p>Revenue: ${movieData.revenue}</p>
            <p>Total Runtime: {movieData.runtime} minutes</p>
          </div>
        </div>
    )}
    </div>
  )

}

export default MovieDetailPage