import React from 'react'

const BeerTile = ({ item }) => {
    
    // console.log(item);

    return(
        <li id={item.id} className='beer-title'>
            <h3>{item.name}</h3>
        </li>
    )

}

export default BeerTile