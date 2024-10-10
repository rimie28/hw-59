import * as React from "react";

interface JokeProps {
  joke: string;
}

const Joke: React.FC<JokeProps> = ({ joke }) => {
  return (
    <div className="mt-2 mb-3">
      <h4>{joke}</h4>
    </div>
  );
};

export default Joke;
