import { useState } from "react";
import MovieSearch from "./components/MovieSearch";
import MovieCard from "./components/MovieCard";
import ActorSearch from "./components/ActorSearch";
import ActorCard from "./components/ActorCard";

const Home = () => {

  const [movieResults, setMovieResults] = useState([]);
  const [actorResults, setActorResults] = useState([]);

  console.log("logging movieResults:", movieResults);
  console.log("logging actorResults:", actorResults);

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
        <ActorSearch setActorResults={setActorResults} />
        <div className='container mt-5'>
            <div className='row'>
                {actorResults && actorResults.map((actor) => (
                    <ActorCard key={actor.id} actor={actor} />
                ))}
            </div>
        </div>
    </>
  )
}

export default Home