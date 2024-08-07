import { useState } from "react";

const ActorSearch = ( {setActorResults} ) => {
    const [actorName, setActorName] = useState("");

    const handleActorSearch = async (e) => {
        e.preventDefault();
        const formattedActorName = actorName.trim().replace(" ", "+");
        const apiKey = process.env.REACT_APP_TMDB_API_KEY;
        
        const res = await fetch(`https://api.themoviedb.org/3/search/person?query=${formattedActorName}&api_key=${apiKey}`);
        
        const data = await res.json();

        console.log("logging data from ActorSearch:", data)
        const actors = data.results;
        
        setActorResults(actors);
      }

    return (

        <form onSubmit={handleActorSearch}>
            <input type="text" placeholder="enter actor name" onChange={(e) => setActorName(e.target.value)} />
            <button className="btn-primary" type="submit">Search Actors</button>
        </form>
    )
}

export default ActorSearch;