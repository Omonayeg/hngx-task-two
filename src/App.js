
import './App.css';
import Homepage from './components/Homepage';
import MovieDetails from './components/MovieDetails';
import NotFound from './components/NotFound';
import Loader from './components/Loader';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  // Simulating an API call or some loading process
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate loading for 3 seconds
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="App">
  
      <Routes>
        <Route exact path="/" element={ <Homepage/>}/>
        <Route path="/movies/:id" element={ <MovieDetails/>}/>
        <Route path='/*' element={ <NotFound /> }/>
      </Routes>
    </div>
      )}
    </div>
  );
};



    
   
  

export default App;

// path="/Movie_details/:id" 
