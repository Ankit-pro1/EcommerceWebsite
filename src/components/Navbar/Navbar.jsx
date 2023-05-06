import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { Link } from 'react-router-dom';
// import { FavoriteOutlined } from '@mui/icons-material';
import './Navbar.scss';

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className='link' to='/products/:1'>Men</Link>
          </div>
          <div className="item">
            <Link className='link' to='/products/:2'>Women</Link>
          </div>
          <div className="item">
            <Link className='link' to='/products/:3'>Children</Link>
          </div>
          <div className="item">
            <Link className='link' to=''>Accessories</Link>
          </div>
        </div>
        <div className="center">ANKITSTORE</div>
        <div className="right">
          <div className="item">
            <Link className='link' to='/'>Home</Link>
          </div>
          <div className="item">
            <Link className='link' to='/'>About</Link>
          </div>
          <div className="item">
            <Link className='link' to='/'>Contact</Link>
          </div>
          <div className="item">
            <Link className='link' to='/'>Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar