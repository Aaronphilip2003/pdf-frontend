import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Vocab() {
  const [word, setWord] = useState({ word: '', meaning: '' });

  const getWord = async () => {
    try {
      const response = await axios.get('https://ap-south-1.aws.data.mongodb-api.com/app/data-mjtnn/endpoint/words');
      const randomWord = getRandomWord(response.data);

      setWord(randomWord);
    } catch (err) {
      console.error(err);
    }
  }

  // Function to randomly select a word from the list
  function getRandomWord(wordList) {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
  }

  useEffect(() => {
    getWord();
  }, []);

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light"></a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">Word of the Day 📚</h5>
          <p className="text-gray-700 text-base mb-4">
            <h1 className="font-bold italic">{word.word}</h1>
            <h2 className="font-bold italic">Meaning: {word.meaning}</h2>
          </p>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={getWord}
          >
            New Word
          </button>
        </div>
      </div>
    </div>
  );
}
