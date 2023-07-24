'use client'
import { useState } from 'react'

const Category = () => {
  const categories = Array.from({ length: 20 })

  return (
    <div className="flex px-16 my-8 m-auto w-[1340px]">
      <div className="carousel carousel-center gap-4">
        {categories.map((index) => (
          <div className="carousel-item" key={index}>
            <input
              type="checkbox"
              aria-label="Category"
              className="btn rounded-full normal-case "
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category
