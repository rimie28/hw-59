import { useState } from 'react';
import * as React from 'react';
import { movieFormProps } from '../../types';

const MovieForm:React.FC<movieFormProps> = ({addMovie}) => {
  const [movie, setMovie] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addMovie(movie);
    setMovie("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
      type="text"
      value={movie}
      onChange={(e) => setMovie(e.target.value)}
      placeholder="Write a movie title"/>
      <button type="submit">Add</button>
    </form>
  )

}

export default MovieForm;