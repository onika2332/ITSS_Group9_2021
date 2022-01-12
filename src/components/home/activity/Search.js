import React from 'react'
import './Search.css'

const Search = ({ text, handleSearch }) => {
    return (
        <div className='search-container'>
            <input
                id="search-input"
                type='text'
                value={text}
                onChange={(e) => handleSearch(e.target.value)}
            />
        </div>
    )
}

export default Search
