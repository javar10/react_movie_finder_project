import { useState } from "react";

const ActorSearch = ({setActorResults}) => {

    const [actorName, setActorName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formattedActorName = actorName.trim().replace(" ", "+");
        const apiKey = process.env.REACT_APP_TMDB_API_KEY;

        // step 1: query movie by name to get movie ID
        // const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${formattedMovieTitle}&api_key=${apiKey}`);
        const res = await fetch(`https://api.themoviedb.org/3/search/person?query=${formattedActorName}&api_key=${apiKey}`);
        const data = await res.json();
        const actors = data.results;

        setActorResults(actors);

        // might need in the future
        // const res = await fetch(`https://api.themoviedb.org/3/movie/75780?api_key=6cd761657add0190cde357202b274567`);
        console.log(actors);
        // return <img src={`https://image.tmdb.org/t/p/w185/5RjD4dDpRDAhalFtvcUj7zdLWYB.jpg`} />
      }

    return (

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="enter actor name" onChange={(e) => setActorName(e.target.value)} />
            <button className="btn-primary" type="submit">Search Actors</button>
        </form>
    )
}

export default ActorSearch;