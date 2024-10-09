import './App.css'
import { useState } from 'react';
import { Movie } from './types';
import MovieForm from './Components/Movie/MovieForm.tsx';

const App = () => {

  const [movies, setMovies] = useState<Movie[]>([]);


  const addMovie = (movie: string) => {
    const addedMovie: Movie = {
      id: Math.random(),
      title: movie,
    }
    setMovies([...movies, addedMovie]);
  }

  return (
    <>
      <div className="container">
        <MovieForm addMovie={addMovie}/>
      </div>
    </>
  )
}

export default App
