import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  const handleApiCall = () => {
    console.log("Hello World")

    const apiKey = process.env.TMDB_API_KEY;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        // Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2Q3NjE2NTdhZGQwMTkwY2RlMzU3MjAyYjI3NDU2NyIsIm5iZiI6MTcxOTAyMjMyOS4wODU3NzIsInN1YiI6IjY2NzYzMThiY2U2ODE3MzU5YmVkMWI0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KJqML1TP0pj_vhhteNOiBWBZXHgaWUGtpn8tHHvfNac'
      }
    };

  fetch('https://api.themoviedb.org/3/movie/14160/images', options)
    // fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=comedyapi_key=6cd761657add0190cde357202b274567`)
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(response => setData(response))
      .catch(err => console.error(err))
  }

  // console.log(data);
  data === null ? console.log('null data') : console.log(data);
  

  return (
    <div className="App">
      Movie Finder
      <div>
        <button onClick={handleApiCall}>Make API Call</button>
      </div>
      <div>
        {data === null ? <></> : 
          <img src={`https://image.tmdb.org/t/p/w342${data.posters[140].file_path}`} />}
      </div>
    </div>
  );
}

export default App;
