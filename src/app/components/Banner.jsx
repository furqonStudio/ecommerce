'use client'
import Image from 'next/image'
import { useState } from 'react'

const Banner = () => {
  return (
    <div className="carousel w-[1250px] flex m-auto">
      <div id="slide1" className="carousel-item relative w-full">
        <Image
          src="/banner1.webp"
          alt="banner1"
          className="w-full rounded-box"
          width={1208}
          height={302}
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <Image
          src="/banner2.webp"
          alt="banner2"
          className="w-full rounded-box"
          width={1208}
          height={302}
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  )
}

export default Banner
