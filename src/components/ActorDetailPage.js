import { useParams } from "react-router-dom"
import { useEffect } from "react";



const ActorDetailPage = () => {

  const {actorId} = useParams();
  const apiKey = process.env.REACT_APP_TMDB_API_KEY;

  useEffect(() => {
    const getMovieDetails = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/person/${actorId}?api_key=${apiKey}`)
        const data = await res.json();
        console.log("loggin data from useEffect:", data)
    }
    getMovieDetails();
  }, [])

  return (
    <div>Actor DetailPage, actor id is: {actorId}</div>
  )
}

export default ActorDetailPage