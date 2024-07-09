import React from 'react'
import './SearchResult.css'
import Results from './Results'

function SearchResult({ results }) {
    return (
        <div className='results-list'>
            {results.map((result,id) => {
                return (
                    <Results result={result} key={id} />
                )
            })}
        </div>
    )
}

export default SearchResult