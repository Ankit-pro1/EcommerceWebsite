import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from '../../components/Slider/Slider'
import React from 'react'

function Home() {
  return (
    <div>
    <Slider/>
    <FeaturedProducts type="Featured"/>
    <FeaturedProducts type="Trending"/>
    </div>
  )
}

export default Home
