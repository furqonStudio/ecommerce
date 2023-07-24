'use client'
import { useContext } from 'react'
import { Context } from '../context/Context'
import ProductItem from './ProductItem'

const Products = () => {
  const products = useContext(Context)

  return (
    <div>
      <ProductItem product={products} />
    </div>
  )
}

export default Products
