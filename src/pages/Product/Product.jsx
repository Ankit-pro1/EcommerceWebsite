import React, { useState } from 'react'
import './Product.scss'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareOutlinedIcon from '@mui/icons-material/CompareOutlined';

function Product() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [
    "https://images.pexels.com/photos/4066292/pexels-photo-4066292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9558252/pexels-photo-9558252.jpeg?auto=compress&cs=tinysrgb&w=600"
  ]

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={()=> setSelectedImage(0)}/>
          <img src={images[1]} alt=""  onClick={()=> setSelectedImage(1)} />
          <img src={images[2]} alt=""  onClick={()=> setSelectedImage(2)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImage]} alt="" />
        </div>
      </div>
      <div className="right">
        <h2>Black T-Shirt</h2>
        <span className="price">$ 19.9</span>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil praesentium incidunt deserunt enim ea, repellat possimus aperiam! Suscipit, nulla reiciendis.</p>
        <div className="quantity">
          <button onClick={()=>setQuantity((prev)=>prev===1?1:prev-1)}>-</button>
         <span>{quantity}</span> 
          <button onClick={()=>setQuantity((prev)=>prev+1)}>+</button>
        </div>
        <button className="addToCart"><AddShoppingCartOutlinedIcon/> ADD TO CART</button>
        <div className="links">
          <span className="item"><FavoriteBorderOutlinedIcon/>ADD TO WISHLIST</span>
          <span className="item"><CompareOutlinedIcon/> ADD TO COMPARE</span>
        </div>
        <div className="productInfo">
          <span>Vendor: Polo</span><br/>
          <span>Product Type: T-Shirt</span><br/>
          <span>Tag: T-Shirt, Women, Top</span>
          <hr />
          <div className="addInfo">
            <span>DESCRIPTION</span><hr />
            <span>ADDITIONAL INFORMATION</span>
            <span>FAQ</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
