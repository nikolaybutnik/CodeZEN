import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Image from '../Image/Image'
import './Main.scss'

const Main = ({ search, results, setSearch, handleSearch }) => {
  return (
    <div className="wrapper">
      <Sidebar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <div id="content">
        {results.map((img) => (
          <Image source={img.urls.thumb} />
        ))}
      </div>
    </div>
  )
}

export default Main
