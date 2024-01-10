import React from 'react'
import Header from "../../Components/Header/Header.js"
import AboutComp from '../../Components/About/About.js'
import ProjectsComp from '../../Components/Projects/Projects.js'
import Footer from '../../Components/Footer/Footer'
const About = () => {
  return (
    <>
        <Header />
        <AboutComp />
        <ProjectsComp />
        <Footer />
    </>
  )
}

export default About