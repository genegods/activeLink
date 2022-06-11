import React from 'react'
import { Routes, Route } from "react-router-dom";
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import About from '../pages/About'

const NavPage = () => {
  return (
    <React.Fragment>
    <section>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      </Routes>
    </section>
  </React.Fragment>
  )
}

export default NavPage