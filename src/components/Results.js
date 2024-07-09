import React from 'react'
import './Results.css'

function Results({ result }) {
    return (
        <div onClick={(e) => alert(`you clicked on ${result.name}`)} className='search-result'>{result.name}</div>
    )
}

export default Results