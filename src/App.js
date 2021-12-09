import React, { useEffect, useState } from 'react'
import BeerList from './components/beerList';
import NavBar from './components/navBar';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [beers, setBeers] = useState([])

  const baseUrl = 'https://api.punkapi.com/v2/beers/';

  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((beers) => {
        setBeers(beers)
      })
  }, [searchTerm])


  const handleInput = (event) => {
    const inputValue = event.target.value
    setSearchTerm(inputValue)
  }

  return(
    <div>
      <h1>React App Beers</h1>
      <NavBar searchTerm={searchTerm} handleInput={handleInput} /> 

      <BeerList beers={beers} searchTerm={searchTerm} />

    </div>
  )
}

export default App;
