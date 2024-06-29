import { useState } from "react";
import MovieSearch from "./components/MovieSearch";
import MovieCard from "./components/MovieCard";



const Home = () => {

  const [movieResults, setMovieResults] = useState([]);


  console.log("logging movieResults:", movieResults);


  return (
    <>
        <MovieSearch setMovieResults={setMovieResults}  />
        <div className='container mt-5'>
            <div className='row'>
                {movieResults && movieResults.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
            </div>
        </div>
    </>
  )
}

export default Home