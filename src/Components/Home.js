import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <h3>Home</h3>
    <Link to="/users">users</Link>|
    <Link to="/products">products</Link>|
    </div>
  )
}

export default Home