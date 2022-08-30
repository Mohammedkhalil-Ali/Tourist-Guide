import React, { Fragment } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../views/Home.jsx'
import Place from '../views/Place.jsx'
import Service from '../views/Service.jsx'
import About from '../views/About.jsx'
// import your route components too

export default function router() {
  return (
    <Fragment>
        

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/place" element={<Place />} />
      <Route path="/service" element={<Service />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>

    </Fragment>
  )
}
