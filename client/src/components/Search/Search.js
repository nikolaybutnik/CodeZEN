import React from 'react'
import './Search.css'
import SearchBar from './SearchBar/SearchBar'

const Search = ({ search, setSearch, results, setResults }) => {
  return (
    <div className="wrapper">
      <div>Goodbye</div>
      <SearchBar />
      {/* <div id="content">
        {results.map((img) => (
          <Image source={img.urls.thumb} />
        ))}
      </div> */}
    </div>
  )
}

export default Search
