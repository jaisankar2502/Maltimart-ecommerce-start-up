import React from 'react'
import ProductCard from './productCard'

const Productlist = ({data}) => {
  return (
    <>
   {data.map((item,index)=>
    <ProductCard item={item} key={index}/>)}
    </>
  )
}

export default Productlist
