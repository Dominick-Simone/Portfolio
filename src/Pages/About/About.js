import React from 'react'
import Header from "../../Components/Header/Header.js"
import AboutComp from '../../Components/About/About.js'
import ProjectsComp from '../../Components/Projects/Projects.js'
import Footer from '../../Components/Footer/Footer'
import Skills from '../../Components/Skills/Skills.js'
const About = () => {
  return (
    <>
        <Header />
        <AboutComp />
        <Skills/>
        <ProjectsComp />
        <Footer />
    </>
  )
}

export default About