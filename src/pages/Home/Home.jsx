import Category from '../../components/Category/Category'
import Contact from '../../components/Contact/Contact'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from '../../components/Slider/Slider'
import React from 'react'

function Home() {
  return (
    <div>
    <Slider/>
    <FeaturedProducts type="Featured"/>
    <Category/>
    <FeaturedProducts type="Trending"/>
    <Contact/>
    </div>
  )
}

export default Home
