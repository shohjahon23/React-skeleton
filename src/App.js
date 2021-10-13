import React, { useState, useEffect } from 'react';
import Joke from './Skeleton/Joke';
import './Skeleton/style.css'

function App() {
  const [joke, setJoke] = useState({})
  const [loading, setLoading] = useState(false)

  const getNewJoke = () => {
    setLoading(true)
    fetch('https://api.chucknorris.io/jokes/random')
      .then(res => res.json())
      .then(data =>{ 
        const {icon_url, value} = data
        setJoke({icon_url, value})
        setLoading(false)
        console.log(data)
      })
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      getNewJoke()
    }, 7000)
    return () => clearTimeout(timer)
  })
  
  return (
    <>
      <Joke joke={joke} loading={loading} getNewJoke={getNewJoke} />
    </>
  );
}

export default App;
