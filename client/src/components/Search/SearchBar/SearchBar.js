import React from 'react'
import './SearchBar.css'

const SearchBar = ({ search, setSearch, handleSearch }) => {
  return (
    <form className="form-inline" onSubmit={handleSearch}>
      <div className="form-group mx-sm-3 mb-2">
        <input
          type="text"
          className="form-control"
          id="inputQuery"
          placeholder="Enter a keyword"
          onChange={(event) => setSearch(event.target.value)}
          value={search}
          autoFocus={true}
        ></input>
        <button type="submit" className="btn btn-primary mb-2">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </form>
  )
}

export default SearchBar
