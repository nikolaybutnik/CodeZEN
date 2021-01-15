import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import './Sidebar.scss'

const Sidebar = ({ search, setSearch, handleSearch }) => {
  return (
    // <!-- Sidebar  -->
    <nav id="sidebar">
      <div class="sidebar-header">
        <h3>CodeZEN</h3>
      </div>

      <ul class="list-unstyled components">
        <SearchBar setSearch={setSearch} handleSearch={handleSearch} />
        <li class="active">
          <a
            href="#homeSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
          >
            Home
          </a>
          <ul class="collapse list-unstyled" id="homeSubmenu">
            <li>
              <a href="#">Home 1</a>
            </li>
            <li>
              <a href="#">Home 2</a>
            </li>
            <li>
              <a href="#">Home 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a
            href="#pageSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
          >
            Pages
          </a>
          <ul class="collapse list-unstyled" id="pageSubmenu">
            <li>
              <a href="#">Page 1</a>
            </li>
            <li>
              <a href="#">Page 2</a>
            </li>
            <li>
              <a href="#">Page 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>

    // <div class="sidenav">
    //   <a href="#">CodeZEN</a>
    //   <input type="text" name="search" placeholder="Search.."></input>
    //   <a href="#">Favorites</a>
    //   <a href="#">About</a>
    // </div>
  )
}

export default Sidebar

// About{' '}
// <Router>
//   <Link to="/about"></Link>
// </Router>

{
  /* <Router>
          <Link to="/home">CodeZen</Link>
        </Router> */
}
