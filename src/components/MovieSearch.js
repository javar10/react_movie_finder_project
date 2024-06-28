import { useState } from "react";

const MovieSearch = ({setMovieResults}) => {

    const [movieTitle, setMovieTitle] = useState("");

    const handleMovieSearch = async (e) => {
        e.preventDefault();
        const formattedMovieTitle = movieTitle.trim().replace(" ", "+");
        const apiKey = process.env.REACT_APP_TMDB_API_KEY;

        // step 1: query movie by name to get movie ID
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${formattedMovieTitle}&api_key=${apiKey}`);
    
        const data = await res.json();
        const movies = data.results;

        setMovieResults(movies);

        // might need in the future
        // const res = await fetch(`https://api.themoviedb.org/3/movie/75780?api_key=6cd761657add0190cde357202b274567`);

      }

    return (

        <form onSubmit={handleMovieSearch}>
            <input type="text" placeholder="enter movie title" onChange={(e) => setMovieTitle(e.target.value)} />
            <button className="btn-primary" type="submit">Search Movie</button>
        </form>
    )
}

export default MovieSearch;