import React from 'react'
import Footer from '../components/Footer'
import PasswordDisplay from '../components/PasswordDisplay'
import OptionsPanel from '../components/OptionsPanel'

const Home = () => {
  return (
    <div>
      <div  className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-primary/15 to-secondary/15 text-center'>
        <div className='bg-white p-6 rounded-lg shadow-xl'>
          <h1 className='text-2xl font-bold text-primary'>Password Generator</h1>
          <p className='mt-4 text-gray-600'>Generate secure and random passwords with ease.</p>
          <PasswordDisplay/>
          <OptionsPanel/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
