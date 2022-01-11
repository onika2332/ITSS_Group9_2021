import React, { useState } from 'react'
import './Search.css'

const Search = () => {
    const [pattern, setPattern] = useState("");
    const handleSearch = (e) => {
        setPattern(e.target.value);
    }
    return (
        <div className='search-container'>
            <input
                type='text'
                value={pattern}
                onChange={(e) => handleSearch(e)}
            />
        </div>
    )
}

export default Search
