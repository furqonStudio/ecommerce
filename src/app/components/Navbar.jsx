import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-8">
      <div className="flex-1">
        <a className="normal-case font-bold text-2xl tracking-tight">ShopiKU</a>
      </div>
      <div className="flex-none">
        <div className="flex gap-2">
          <a className="btn btn-outline btn-primary btn-sm normal-case">
            Masuk
          </a>
          <a className="btn btn-primary btn-sm normal-case">Daftar</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
