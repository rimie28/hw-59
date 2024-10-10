export interface Movie {
  id: number;
  title: string;
}

export interface movieFormProps {
  addMovie: (movie: string) => void;
}

export interface MovieItemProps {
  movie: Movie;
  updateMovie: (id: number, newTitle: string) => void;
  deleteMovie: (id: number) => void;
}
