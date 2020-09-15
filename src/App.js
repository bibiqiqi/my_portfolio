import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Link, Router } from 'components/Router'
import Work from 'pages/work'
import Contact from 'pages/contact'
import Home from 'pages/home'

import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
// addPrefetchExcludes(['dynamic'])

export default function App() {
  return (
    <Root>
      <header>
        <Link to="/"><h1>bibi samreny</h1></Link>
      </header>
      <main className="content">
        <Router>
          <Routes exact path="/" component={Home}/>
          <Routes exact path="/work" component={Work}/>
          <Routes exact path="/contact" component={Contact}/>
        </Router>
      </main>
    </Root>
  )
}
