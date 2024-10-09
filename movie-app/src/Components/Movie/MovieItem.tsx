import * as React from 'react';
import { MovieItemProps } from '../../types';

const MovieItem:React.FC<MovieItemProps> = ({movie, updateMovie}) => {

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
      <button className="btn">❌</button>
    </div>
  )
}

export default MovieItem;