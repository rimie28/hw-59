import { useState } from "react";
import { Movie } from "./types";
import MovieForm from "./Components/Movie/MovieForm.tsx";
import MovieItem from "./Components/Movie/MovieItem.tsx";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const addMovie = (movie: string) => {
    const addedMovie: Movie = {
      id: Math.random(),
      title: movie,
    };
    setMovies([...movies, addedMovie]);
  };

  const updateMovie = (id: number, newTitle: string) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) => {
        if (movie.id === id) {
          return { ...movie, title: newTitle };
        } else {
          return movie;
        }
      }),
    );
  };

  const deleteMovie = (id: number) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  return (
    <>
      <div className="container border border-dark rounded p-3 m-4 col-5">
        <MovieForm addMovie={addMovie} />
        <div className="row mt-4">
          {movies.map((movie: Movie) => (
            <MovieItem
              movie={movie}
              updateMovie={updateMovie}
              deleteMovie={deleteMovie}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
