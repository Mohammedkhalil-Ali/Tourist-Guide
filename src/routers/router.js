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
import MoreDetail from '../views/MoreDetail.jsx'
import Login from '../views/Login'
import SignIn from '../views/signin'
import Profile from '../views/profile'
import ServiceDetail from '../views/ServiceDetail'
import Store from '../views/MyStore'
// import your route components too

export default function router() {
  return (
    <Fragment>
        

  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/" element={<Home />} />
      <Route path="/place" element={<Place />} />
      <Route path="/service" element={<Service />} />
      <Route path="/about" element={<About />} />
      <Route path="/moredetail/:id" element={<MoreDetail />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/servicedetail/:id" element={<ServiceDetail />} />
      <Route path="/store" element={<Store />} />

    </Routes>
  </BrowserRouter>

    </Fragment>
  )
}
