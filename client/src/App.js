import React, { useState, useEffect } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './components/Main/Main'
import About from './components/About/About'

function App() {
  return (
    <div>
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
