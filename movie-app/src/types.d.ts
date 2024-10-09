export interface Movie {
  id: number;
  title: string;
}

export interface movieFormProps {
  addMovie: (movie: string) => void;
}