import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Sidenav from './components/Sidenav/Sidenav'
import Main from './components/Main/Main'
import Search from './components/Search/Search'
import About from './components/About/About'

function App() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    console.log(search)
  }, [search])

  return (
    <Router>
      <Route
        render={({ location, history }) => (
          <React.Fragment>
            <Sidenav location={location} history={history} />
            <main>
              <Route exact path="/" component={(props) => <Main />} />
              <Route path="/home" component={(props) => <Main />} />
              <Route
                path="/search"
                component={(props) => (
                  <Search
                    {...props}
                    search={search}
                    setSearch={setSearch}
                    results={results}
                    setResults={setResults}
                  />
                )}
              />
              <Route path="/about" component={(props) => <About />} />
            </main>
          </React.Fragment>
        )}
      />
    </Router>
  )
}

export default App

// GET /photos/random - retrieve a random photo

// Parameters
// All parameters are optional, and can be combined to narrow the pool of photos from which a random one will be chosen.

// collections:	Public collection ID(‘s) to filter selection. If multiple, comma-separated
// featured:	Limit selection to featured photos.
// username:	Limit selection to a single user.
// query:	Limit selection to photos matching a search term.
// orientation:	Filter by photo orientation. (Valid values: landscape, portrait, squarish)
// content_filter:	Limit results by content safety. Default: low. Valid values are low and high.
// count:	The number of photos to return. (Default: 1; max: 30)

// Note: You can’t use the collections and query parameters in the same request

// Note: When supplying a count parameter - and only then - the response will be an array of photos, even if the value of count is 1.

// Get a photo’s statistics
// Retrieve total number of downloads, views and likes of a single photo, as well as the historical breakdown of these stats in a specific timeframe (default is 30 days).

// GET /photos/:id/statistics
// Parameters
// id:	The public id of the photo. Required.
// resolution:	The frequency of the stats. (Optional; default: “days”)
// quantity:	The amount of for each stat. (Optional; default: 30)
// Currently, the only resolution param supported is “days”. The quantity param can be any number between 1 and 30.

// Search photos
// Get a single page of photo results for a query.

// GET /search/photos

// query:	Search terms.
// page:	Page number to retrieve. (Optional; default: 1)
// per_page:	Number of items per page. (Optional; default: 10)
// order_by:	How to sort the photos. (Optional; default: relevant). Valid values are latest and relevant.
// collections:	Collection ID(‘s) to narrow search. Optional. If multiple, comma-separated.
// content_filter:	Limit results by content safety. (Optional; default: low). Valid values are low and high.
// color:	Filter results by color. Optional. Valid values are: black_and_white, black, white, yellow, orange, red, purple, magenta, green, teal, and blue.
// orientation:	Filter by photo orientation. Optional. (Valid values: landscape, portrait, squarish)

// Example: Link: <https://api.unsplash.com/search/photos?page=1&query=office>; rel="first",
//                <https://api.unsplash.com/search/photos?page=1&query=office>; rel="prev",
//                <https://api.unsplash.com/search/photos?page=3&query=office>; rel="last",
//                <https://api.unsplash.com/search/photos?page=3&query=office>; rel="next"
