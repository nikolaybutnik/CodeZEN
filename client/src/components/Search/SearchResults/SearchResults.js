import React from 'react'
import Image from '../../Image/Image'

const SearchResults = ({ results }) => {
  return (
    <div className="container">
      {results.map((img) => (
        <Image source={img.urls.thumb} />
      ))}
    </div>
  )
}

export default SearchResults
