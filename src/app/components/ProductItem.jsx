'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const ProductItem = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    setProducts(data)
  }

  console.log(products)

  return (
    <div className="card bg-base-100 w-[188px] drop-shadow-lg flex flex-row ">
      {products.map((product) => (
        <div className="" key={product.id}>
          <figure>
            <Image src={product.image} alt="Shoes" width={200} height={200} />
          </figure>
          <div className="p-4">
            <h2 className="text-md font-semibold tracking-tight">
              {product.title}
              <div className="badge badge-md badge-secondary ml-2">NEW</div>
            </h2>
            <p className="text-xl font-bold">Rp. {product.price}</p>
            <div className="card-actions justify-start mt-1">
              <div className="badge badge-sm badge-outline">
                {product.category}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductItem
