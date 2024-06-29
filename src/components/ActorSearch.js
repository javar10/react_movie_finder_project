import { useState } from "react";

const ActorSearch = ({setActorResults}) => {

    const [actorName, setActorName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formattedActorName = actorName.trim().replace(" ", "+");
        const apiKey = process.env.REACT_APP_TMDB_API_KEY;
        const res = await fetch(`https://api.themoviedb.org/3/search/person?query=${formattedActorName}&api_key=${apiKey}`);
        const data = await res.json();
        const actors = data.results;
        setActorResults(actors);
        console.log(actors);
      }

    return (

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="enter actor name" onChange={(e) => setActorName(e.target.value)} />
            <button className="btn-primary" type="submit">Search Actors</button>
        </form>
    )
}

export default ActorSearch;