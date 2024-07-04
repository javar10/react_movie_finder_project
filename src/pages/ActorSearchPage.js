import { useState } from "react";
import ActorSearch from "../components/ActorSearch";
import ActorCard from "../components/ActorCard";

const ActorSearchPage = () => {
    const [actorResults, setActorResults] = useState([]);
    
  return (
    <>       
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

export default ActorSearchPage