import React from 'react'
import Card from '../Card/Card'
import './FeaturedProducts.scss'

function FeaturedProducts({type}) {
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/4676642/pexels-photo-4676642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/4119596/pexels-photo-4119596.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Denim Jacket",
            isNew: true,
            oldPrice: 25,
            price: 20
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/2561101/pexels-photo-2561101.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Summer shorts",
            isNew: true,
            oldPrice: 25,
            price: 20
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/994843/pexels-photo-994843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Jumpsuit",
            isNew: false,
            oldPrice: 25,
            price: 20
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/1006985/pexels-photo-1006985.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Tops & Skirts",
            isNew: true,
            oldPrice: 25,
            price: 20
        },
    ]
  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} Products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas pariatur perspiciatis voluptatibus, voluptatem unde repellat ex molestiae dolor earum cupiditate et odit obcaecati doloribus cumque fugit minima sint a voluptatum.</p>
        </div>
        <div className="bottom">
            {data.map(item=>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts
