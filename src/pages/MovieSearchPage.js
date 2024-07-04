import { useState } from "react";
import MovieSearch from "../components/MovieSearch";
import MovieCard from "../components/MovieCard";

const MovieSearchPage = () => {

  const [movieResults, setMovieResults] = useState([]);

  return (
    <>
        <MovieSearch setMovieResults={setMovieResults}  />
        <div className='container mt-5'>
            <div className='row'>
                {movieResults && movieResults.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    </>
  )
}

export default MovieSearchPage


