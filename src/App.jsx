// src/App.js
import React, { useState, useEffect } from 'react';

const App = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetchJoke();
  }, []); // Fetch a joke when the component mounts

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Any');
      const data = await response.json();

      if (data.type === 'single') {
        setJoke(data.joke);
      } else if (data.type === 'twopart') {
        setJoke(`${data.setup} ${data.delivery}`);
      }
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  const getNewJoke = () => {
    fetchJoke();
  };

  return (
    <div className="">
    <h1 className="bg-black text font-extrabold text-white w-15 rounded-full text-center m-6">Just Jokes</h1>
    <div className="min-h-screen flex items-center justify-center bg-slate-400">
     
      <div className="bg-red-100 p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Laughter is good medicine</h1>
        <p className="text-lg">{joke}</p>
        <button
          className="bg-black text-white py-2 px-4 mt-4 rounded"
          onClick={getNewJoke}
        >
          Get New Joke
        </button>
      </div>
    </div>
    </div>
  );
};

export default App;
