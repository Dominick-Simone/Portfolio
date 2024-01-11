import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import ResumePDF from './Resume.pdf'
const Resume = () => {
  return (
    <>
    <Header />
    <div className='flex justify-center bg-gray-300'>

    <embed src={ResumePDF} className='h-screen w-4/5' />
    </div>
    <Footer />
    </>
  )
}

export default Resume