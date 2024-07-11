import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";



const ActorDetailPage = () => {

  const {actorName} = useParams();
  const apiKey = process.env.REACT_APP_TMDB_API_KEY;
  const [actorData, setActorData] = useState({})
  const [famousMovies, setFamousMovies] = useState([])
  // const [index, setIndex] = useState(0)


  console.log("logging famous movies from state:", famousMovies)



    const backgroundStyle = {
      backgroundImage: `url('https://image.tmdb.org/t/p/original${actorData.profile_path}')`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: 'full',
      height: '100vh'
    };

  console.log("logging actorData", actorData)

  useEffect(() => {
    const getMovieDetails = async () => {
        // const res = await fetch(`https://api.themoviedb.org/3/person/${actorId}?api_key=${apiKey}`)
        // const res = await fetch(`https://api.themoviedb.org/3/person/${actorId}?api_key=${apiKey}`)
        // // https://api.themoviedb.org/3/search/person?query=brad&include_adult=false&language=en-US&page=1'
        // const data = await res.json();
        // console.log("loggin data from useEffect:", data)

        
        const res = await fetch(`https://api.themoviedb.org/3/search/person?query=${actorName}&api_key=${apiKey}`);
        
        const data = await res.json();

        console.log("logging data results:", data.results[0])

        setActorData(data.results[0]);

        setFamousMovies(data.results[0].known_for)

        console.log("logging data from ActorDetailsPage:", data)
        // const actors = data.results;
        
    }
    getMovieDetails();
  }, [])


  // useEffect(() => {
  //   const backgroundStyle = {
  //     backgroundImage: `url('https://image.tmdb.org/t/p/original${actorData.results[0].profile_path}')`,
  //     backgroundPosition: 'center',
  //     backgroundSize: 'cover',
  //     backgroundRepeat: 'no-repeat',
  //     width: 'full',
  //     height: '100vh'
  //   };
  // }, [actorData])

  return (
    <>
      {actorData && ( 
        <div style={backgroundStyle} className="movieDetailsCard">         
            <div className="movieDetailsText">
              <h2>{actorData.name}</h2>
              <hr />
              <h4>Known for:</h4>
              <div style={{display:"flex", justifyContent: "space-evenly"}}>
                {famousMovies.map((movie, index) => (
                  <div>
                  <img key={index} src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} />
                  <p>{movie.release_date}</p>
                  </div>
                ))}
              </div>

              {/* <p>{movieData.overview}</p>
              <p>Revenue: ${movieData.revenue}</p>
              <p>Total Runtime: {movieData.runtime} minutes</p> */}
          </div>
        </div>
      )}  
    </>
  )
}

export default ActorDetailPage