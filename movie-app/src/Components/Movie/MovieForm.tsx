import { useState } from 'react';
import * as React from 'react';
import { movieFormProps } from '../../types';

const MovieForm:React.FC<movieFormProps> = React.memo(
  ({addMovie}) => {
    const [movie, setMovie] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      addMovie(movie);
      setMovie("");
    }

    return (
      <form onSubmit={handleSubmit} className="d-flex justify-content-between gap-2 align-items-center">
        <input
          className="form-control"
          type="text"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
          placeholder="Write a movie title"/>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    )

  }
)

export default MovieForm;