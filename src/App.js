import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import MovieDetailPage from './MovieDetailPage';
import ActorDetailPage from './components/ActorDetailPage';


function App() {


  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:movieId" element={<MovieDetailPage />} />
            <Route path="/actor/:actorId" element={<ActorDetailPage />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
