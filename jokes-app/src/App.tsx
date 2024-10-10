import { useEffect, useState } from 'react';
import Joke from './Components/Joke/Joke.tsx';


function App() {

  const [joke, setJoke] = useState<string>('');

  const getJokes = async () => {
    try {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const jokes = await response.json();
      setJoke(jokes.value);
    } catch(error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getJokes();
  }, [])

  return (
    <>
      <div className="container p-2">
        <Joke joke={joke} />
        <button type="button" onClick={getJokes} className="btn btn-primary">New Joke</button>
      </div>
    </>
  )
}

export default App
