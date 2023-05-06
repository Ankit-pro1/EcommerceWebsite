import React, { useState } from 'react'
import List from '../../components/List/List'
import './Products.scss'
import { useParams } from 'react-router-dom'

function Products() {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState('asc');
  console.log(sort);
  console.log(catId);
  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" name="" id="1" value="1" />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" name="" id="2" value="2" />
            <label htmlFor="2">Jeans</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" name="" id="3" value="3" />
            <label htmlFor="3">Shirts</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" name="" id="" min={0} max={1000} onChange={(e)=>{setMaxPrice(e.target.value)}} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" name="price" id="asc" value="asc" onChange={e=>{setSort('asc')}} />
            <label htmlFor="asc">Price (lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" name="price" id="dsc" value="dsc" onChange={e=>{setSort('dsc')}}/>
            <label htmlFor="dsc">Price (highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="catImg">
          <img src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        </div>
        <List/>
      </div>
    </div>
  )
}

export default Products
