
import './App.css';
import Homepage from './components/Homepage';
import MovieDetails from './components/MovieDetails';
import NotFound from './components/NotFound';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
  
      <Routes>
        <Route exact path="/" element={ <Homepage/>}/>
        <Route path="/movie_details/:id" element={ <MovieDetails/>}/>
        <Route path='/*' element={ <NotFound /> }/>
      </Routes>
    </div>
  );
}

export default App;

// path="/Movie_details/:id" 
