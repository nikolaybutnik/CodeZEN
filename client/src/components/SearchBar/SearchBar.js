import React, { useEffect, useState } from 'react'
import API from '../../utils/API'
import './SearchBar.css'

const SearchBar = () => {
  const [search, setSearch] = useState('')

  useEffect(() => {
    // console.log(search)
  }, [search])

  const handleSearch = (event) => {
    event.preventDefault()
    API.getPhotos(search).then((res) => {
      console.log(res)
    })
  }

  return (
    <form className="form-inline" onSubmit={handleSearch}>
      <div className="form-group mx-sm-3 mb-2">
        <input
          type="text"
          className="form-control"
          id="inputQuery"
          placeholder="Enter a keyword"
          onChange={(event) => setSearch(event.target.value)}
        ></input>
        <button type="submit" className="btn btn-primary mb-2">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </form>
  )
}

export default SearchBar
