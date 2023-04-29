import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <p>Shopping Cart</p>
      </div>
      <div className="navlinks">
        <Link to={'/shopingCart/'} style={{
          textDecoration: 'none',
          color: "white"
        }}>
          <p>Home Page</p>
        </Link>
        <Link to={'/shopingCart/Home/yourcart/'} style={{
          textDecoration: 'none',
          color: "white"
        }}><p>Cart Page</p></Link>
      </div>
    </div>
  )
}

export default NavBar