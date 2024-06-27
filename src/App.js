import './App.css';
import { useState } from 'react';
import MovieSearch from './components/MovieSearch';
import MovieCard from './components/MovieCard';




function App() {
  const [movieResults, setMovieResults] = useState([]);


  console.log("logging movieResults from App.js", movieResults);

  
  return (
    <div className="App">
      <MovieSearch setMovieResults={setMovieResults}  />
      <div>
        {movieResults && movieResults.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>

    </div>
  );
}

export default App;
