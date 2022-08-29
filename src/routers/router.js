import React, { Fragment } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../views/Home.jsx'
// import your route components too

export default function router() {
  return (
    <Fragment>
        

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>

    </Fragment>
  )
}
