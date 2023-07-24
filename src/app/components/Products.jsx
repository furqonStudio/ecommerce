import ProductItem from './ProductItem'

const Products = () => {
  return (
    <div className="m-auto px-16 my-8 w-[1340px]">
      <div className="flex gap-4 flex-wrap">{<ProductItem />}</div>
    </div>
  )
}

export default Products
