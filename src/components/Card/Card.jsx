import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'

function Card({ item }) {
  return (
    <Link to={`product/${item.id}`}>
    <div className='card'>
      {item.isNew && <span>New Season</span> } 
      <div className="image">
        <img className='mainImg' src={item.img} alt="" />
        <img className='secondImg' src={item.img2} alt="" />
      </div>
      <h2 className='cardTitle'>{item.title}</h2>
        <div className="price">
          <h3 className="oldPrice">${item.oldPrice}</h3>
          <h3 className="newPrice">${item.price}</h3>
        </div>
      </div>
      </Link>
        )
}

export default Card
