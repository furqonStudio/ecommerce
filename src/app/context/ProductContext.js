import { createContext, useState } from 'react'

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  return (
    <ProductContext.Provider value={{ user, setUser }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContext
