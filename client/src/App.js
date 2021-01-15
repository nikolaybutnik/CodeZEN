import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './components/Main/Main'
import About from './components/About/About'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route exact path="/home" component={Main} />
      <Route path="/about" component={About} />
    </Router>
  )
}

export default App
