import React, { useState, useEffect } from 'react'
import './App.css'
import API from './utils/API'

function App() {
  useEffect(() => {
    API.getPhotos().then((res) => {
      console.log(res)
    })
  }, [])

  return <div>Hello</div>
}

export default App
