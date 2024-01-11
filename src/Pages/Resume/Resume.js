import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
const Resume = () => {
  return (
    <>
    <Header />
    <div className='flex justify-center bg-gray-300'>

    <embed src="../Resume.pdf" className='h-screen w-4/5' />
    </div>
    <Footer />
    </>
  )
}

export default Resume