import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import MovieDetailPage from './pages/MovieDetailPage';
import ActorDetailPage from './pages/ActorDetailPage';
import ActorSearchPage from './pages/ActorSearchPage';
import MovieSearchPage from './pages/MovieSearchPage';


function App() {


  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/movie" element={<MovieSearchPage />} />
            <Route path="/search/movie/:movieId" element={<MovieDetailPage />} />
            <Route path="/search/actor" element={<ActorSearchPage />} />
            <Route path="/search/actor/:actorName" element={<ActorDetailPage />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
