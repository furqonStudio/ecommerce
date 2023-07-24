import React from 'react'

const Filter = () => {
  return (
    <div className="flex justify-center items-end my-8 gap-4 px-16 m-auto w-[1340px]">
      <h1 className="text-2xl font-bold mb-2">Kategori</h1>
      <div className="join w-full">
        <input
          className="input input-bordered join-item w-full"
          placeholder="Search"
        />
        <button className="btn join-item">Search</button>
      </div>
      <select className="select select-bordered max-w-xs">
        <option disabled selected>
          Urutkan
        </option>
        <option>Tanggal</option>
        <option>Harga</option>
        <option>Lokasi *beta</option>
      </select>
      <select className="select select-bordered max-w-xs">
        <option disabled selected>
          Urutan
        </option>
        <option>Ascending</option>
        <option>Descending</option>
      </select>
    </div>
  )
}

export default Filter
