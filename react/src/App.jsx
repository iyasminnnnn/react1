import React from 'react'
import createReactClass from 'create-react-class';
import About from "./components/about"
import Contact from "./components/contact"
import Header from "./components/header"
import Navbar from "./components/navbar"
import Project from "./components/project"
import Footer from "./components/footer"
import Map from "./components/map"
function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Project/>
    <About/>
    <Contact/>
    <Map/>
    <Footer/>
    </>
  )
}

export default App