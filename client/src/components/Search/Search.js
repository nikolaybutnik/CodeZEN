import React from 'react'
import './Search.css'
import SearchBar from './SearchBar/SearchBar'
import Image from '../Image/Image'
import { createApi } from 'unsplash-js'

const Search = ({ search, setSearch, results, setResults }) => {
  const api = createApi({
    accessKey: 'hWXpDLkq8si4lnWuLGecXoSKivOG3F3Tc2g-zcgcnBs',
  })

  const handleSearch = (event) => {
    event.preventDefault()
    api.search.getPhotos({ query: search }).then((res) => {
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
      <SearchBar handleSearch={handleSearch} setSearch={setSearch} />
      <div id="content">
        {results.map((img) => (
          <Image source={img.urls.thumb} />
        ))}
      </div>
    </div>
  )
}

export default Search
