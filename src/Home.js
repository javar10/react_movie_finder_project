
import { Link } from "react-router-dom";


const Home = () => {

  return (
    <>  
        <Link to="/search/movie"> 
            <button>Search by Movie Title</button>
        </Link>
        <Link to="/search/actor"> 
            <button>Search by Actor Name</button>
        </Link>
 
    </>
  )
}

export default Home