import React from 'react'
import Navbar from '../components/Navbar'
import CategoryMenu from '../components/CategoryMenu'
import FootItem from '../components/FootItem'
import Cart from '../components/Cart'

const Home = () => {
  return (
    <>
    <Navbar/>
    <CategoryMenu/>
    <FootItem/>
    <Cart/>
    </>
  )
}

export default Home