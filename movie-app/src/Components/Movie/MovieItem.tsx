import * as React from 'react';
import { MovieItemProps } from '../../types';

const MovieItem:React.FC<MovieItemProps> = React.memo(
  ({movie, updateMovie, deleteMovie}) => {

    const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
      updateMovie(movie.id, e.target.value);
    }

    return (
      <div className="mt-2 d-flex justify-content-between">
        <input
          className="form-control border border-dark rounded-0"
          type="text"
          value={movie.title}
          onChange={changeTitle}
          placeholder="Write a movie title"
        />
        <button
          onClick={() => deleteMovie(movie.id)}
          className="btn"
        >❌</button>
      </div>
    )
  }
)

export default MovieItem;