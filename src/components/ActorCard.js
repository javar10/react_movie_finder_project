import { Link } from "react-router-dom";
import { useState } from 'react';


const ActorCard = ({actor}) => {

  const {name, profile_path, id} = actor;
  

  const actorId = id;
  const apiKey = process.env.REACT_APP_TMDB_API_KEY;
  const [lifeSpan, setLifeSpan] = useState("")

 // TODO: get and display actor's lifespan 
  // const getActorDetails = async () => {
  //   const res = await fetch(`https://api.themoviedb.org/3/person/${actorId}?api_key=${apiKey}`);
  //   const data = await res.json();
  //   console.log(data);

  //   let birthYear = data.birthday;
  //   console.log(typeof(birthYear))
  //   birthYear === null ? birthYear = "" : birthYear = data.birthday.slice(0, 4);
  //   console.log(birthYear)
  //   let deathYear = data.deathday;
  //   console.log(deathYear)
  //   deathYear === null? deathYear = "" : deathYear = data.deathYear.slice(0, 4);
  //   setLifeSpan(`${birthYear} - ${deathYear}`);

  // }
  
  // getActorDetails();
  // console.log(lifeSpan);

  return (
    <Link className='col-3' to={`/actor/${id}`}>
      <div className="movieCard">
          <img src={`https://image.tmdb.org/t/p/w185${profile_path}`} /> 
          <hr/>
          <div className="movieCardBody">
            <h3>{name}</h3>
            {/* <p className="release-date">{lifeSpan}</p> */}
          </div>
      </div>
    </Link>
  )
}

export default ActorCard;