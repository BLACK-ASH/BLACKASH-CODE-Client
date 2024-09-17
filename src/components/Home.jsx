import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='h-screen' >
      <div>Home</div>
      <p>Website is currently under Development</p>
      <p>Please use Playground</p>
      <p>Playground is in menu</p>
      <button className='btn btn-primary' ><NavLink to="/playground">Playground</NavLink></button>
    </div>
  )
}

export default Home