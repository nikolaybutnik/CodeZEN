import React, { useState, useEffect } from 'react'
import './App.css'
import API from './utils/API'
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Main from './components/Main/Main'
import About from './components/About/About'

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
      <Sidebar />
      <Router>
        <Route exact path="/" component={Main} />
        <Route exact path="/home" component={Main} />
        <Route path="/about" component={About} />
      </Router>
    </div>
  )
}

export default App
