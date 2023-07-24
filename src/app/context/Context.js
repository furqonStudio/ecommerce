'use client'
import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

const Context = createContext()

const Provider = ({ children }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products')
    setProducts(data)
  }

  return <Context.Provider value={products}>{children}</Context.Provider>
}

export { Context, Provider }
