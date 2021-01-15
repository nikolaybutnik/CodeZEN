import React, { useState, useEffect } from 'react'
import './App.css'
import API from './utils/API'

function App() {
  const getPhotos = () => {
    API.getPhotos().then((res) => {
      console.log(res)
    })
  }
  // useEffect(() => {
  //   API.getPhotos().then((res) => {
  //     console.log(res)
  //   })
  // }, [])

  return (
    <div>
      <button onClick={getPhotos}>Request Photos</button>
    </div>
  )
}

export default App
