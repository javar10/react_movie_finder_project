import './App.css';

function App() {

  const handleApiCall = () => {
    console.log("Hello World")

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ${process.env.TMDB_ACCESS_TOKEN}'
      }
    };
    
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=comedy', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }


  return (
    <div className="App">
      Movie Finder
      <button onClick={handleApiCall}>Make API Call</button>
    </div>
  );
}

export default App;
