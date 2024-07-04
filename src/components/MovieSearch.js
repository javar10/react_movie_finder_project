import { useState } from "react";

const MovieSearch = ({setMovieResults}) => {
    const [movieTitle, setMovieTitle] = useState("");

    const handleMovieSearch = async (e) => {
        e.preventDefault();
        const formattedMovieTitle = movieTitle.trim().replace(" ", "+");
        const apiKey = process.env.REACT_APP_TMDB_API_KEY;

        const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${formattedMovieTitle}&api_key=${apiKey}`);
    
        const data = await res.json();
        const movies = data.results;

        setMovieResults(movies);
      }

    return (

        <form onSubmit={handleMovieSearch}>
            <input type="text" placeholder="enter movie title" onChange={(e) => setMovieTitle(e.target.value)} />
            <button className="btn-primary" type="submit">Search Movie</button>
        </form>
    )
}

export default MovieSearch;