import React from 'react'
import BeerTile from './beerTile'

const BeerList = ({beers, searchTerm}) => {

    return(
        <div className='beer-list'>
        
        {
            beers
            .filter(item => {
              if (!searchTerm) return true
              if (item.name.includes(searchTerm)) {
                return true
              }
            })
            .map(item => (
                <ul>
                    <BeerTile key={item.id} item={item} />
                </ul>
            ))
        }

        </div>
    )

}

export default BeerList