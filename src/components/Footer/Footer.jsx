import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h2>Categories</h2>
          <Link to='products/:1'>Men</Link>
          <Link to='products/:2'>Women</Link>
          <Link to='products/:3'>Children</Link>
          <Link to='products/:4'>Accessories</Link>
        </div>
        <div className="item">
          <h2>Links</h2>
          <Link to='/'>Home</Link>
          <Link to='/'>About</Link>
          <Link to='/'>Contact</Link>
          <Link to='/'>Stores</Link>
        </div>
        <div className="item">
          <h2>About</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta hic quas quisquam perferendis fugiat, dolore ratione ipsam quae odit impedit. Lorem ipsum dolor sit.</p>
        </div>
        <div className="item">
          <h2>Contact</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta hic quas quisquam perferendis fugiat, dolore ratione ipsam quae odit impedit. Lorem ipsum dolor sit.</p>
        </div>
      </div>
      <div className="bottom">
        <div className="center">
          <Link to='/' className="logo">ANKITSTORE</Link>
          <p className='copyright'>&#169; All right reserved. Created by <a href="https://ankitcode.netlify.app/" target='_blank'>Ankit Kumar</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer
