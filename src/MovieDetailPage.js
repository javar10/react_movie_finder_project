import { useParams } from "react-router-dom"
import { useEffect } from "react";



const MovieDetailPage = () => {

  const {movieId} = useParams();
  const apiKey = process.env.REACT_APP_TMDB_API_KEY;

  useEffect(() => {
    const getMovieDetails = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
        const data = await res.json();
        console.log("loggin data from useEffect:", data)
    }
    getMovieDetails();
  }, [])

  return (
    <div>MovieDetailPage, movie id is: {movieId}</div>
  )
}

export default MovieDetailPage