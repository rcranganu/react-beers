import React from 'react'

const NavBar = ({ searchTerm, handleInput }) => {
    return(
        <nav>

            <form>
                <input type="text" id="inputValue" value={searchTerm} onInput={handleInput} />
            </form> 

        </nav>
    )
}

export default NavBar