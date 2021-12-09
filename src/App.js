import React, { useEffect, useState } from 'react'

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
      React App Beers
      <form>
        <input type="text" id="inputValue" value={searchTerm} onInput={handleInput} />
      </form> 
      {
        beers
        .filter(item => {
          if (!searchTerm) return true
          if (item.name.includes(searchTerm)) {
            return true
          }
        })
        .map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <span>{item.tagline}</span>
            <img src={item.image_url} />
          </div>
        ))
      }
    </div>
  )
}

export default App;
