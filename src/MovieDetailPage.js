import { useParams } from "react-router-dom"
import { useEffect } from "react";



const MovieDetailPage = () => {

  const {movieId} = useParams();

  useEffect(() => {
    const getMovieDetails = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=6cd761657add0190cde357202b274567`)
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