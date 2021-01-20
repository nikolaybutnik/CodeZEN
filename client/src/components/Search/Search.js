import React from 'react'
import './Search.css'
import SearchBar from './SearchBar/SearchBar'

import SearchResults from './SearchResults/SearchResults'
import { createApi } from 'unsplash-js'

const Search = ({ search, setSearch, results, setResults }) => {
  const api = createApi({
    accessKey: 'hWXpDLkq8si4lnWuLGecXoSKivOG3F3Tc2g-zcgcnBs',
  })

  const handleSearch = (event) => {
    event.preventDefault()
    api.search
      .getPhotos({ query: search, orientation: 'landscape', per_page: 20 })
      .then((res) => {
        console.log(res.response.results)
        setResults(res.response.results)
      })
  }

  return (
    <div className="wrapper">
      <div>
        Search bar with search results. Each result will have an option to add
        to favorites. Will require a mongo database.
      </div>

      <SearchBar
        search={search}
        handleSearch={handleSearch}
        setSearch={setSearch}
      />
      <SearchResults results={results} />
    </div>
  )
}

export default Search
