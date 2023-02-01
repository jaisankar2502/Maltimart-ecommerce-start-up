import React from 'react'
import ProductCard from './productCard'

const Productlist = ({data}) => {
  return (
    <>
   {data.map((item)=>
    <ProductCard item={item}/>)}
    </>
  )
}

export default Productlist