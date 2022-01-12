import React from 'react'

function FilterItem({ name, status, handleClick }) {
    return (
        <button className={status ? "light" : "dark"} onClick={() => handleClick()}>
            {name}
        </button>
    )
}

export default FilterItem
