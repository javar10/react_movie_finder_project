import { Link } from "react-router-dom";
import { useState } from 'react';


const ActorCard = ({actor}) => {
  const {name, profile_path, id} = actor;
  const [lifeSpan, setLifeSpan] = useState("")

  const getActorDetails = async () => {
    const actorId = id;
    const apiKey = process.env.REACT_APP_TMDB_API_KEY;
    const res = await fetch(`https://api.themoviedb.org/3/person/${actorId}?api_key=${apiKey}`);
    const data = await res.json();

    let birthYear = data.birthday;
    !birthYear ? birthYear = "" : birthYear = data.birthday.slice(0, 4);
    let deathYear = data.deathday;
    !deathYear ? deathYear = "" : deathYear = data.deathday.slice(0, 4);
    setLifeSpan(`${birthYear} - ${deathYear}`);
  }
  
  getActorDetails();

  return (
    <Link className='col-3' to={`/search/actor/${name}`}>
      <div className="movieCard">
          <img src={`https://image.tmdb.org/t/p/w185${profile_path}`} /> 
          <hr/>
          <div className="movieCardBody">
            <h3>{name}</h3>
            <p className="release-date">{lifeSpan}</p>
          </div>
      </div>
    </Link>
  )
}

export default ActorCard;