import Image from 'next/image'
import { useRouter } from 'next/navigation'

const ProductItem = ({ product }) => {
  const router = useRouter()

  return (
    <div className="w-[1250px] m-auto grid grid-cols-5 gap-4 ">
      {product.map((product) => (
        <div
          className="card bg-base-100 shadow"
          key={product.id}
          onClick={() => router.push('/product')}
        >
          <figure>
            <Image
              src={product.image}
              alt="Shoes"
              width={200}
              height={200}
              className="h-[200px] object-cover"
            />
          </figure>
          <div className="p-4">
            <h2 className="text-md tracking-tight">
              {product.title.length > 40
                ? product.title.slice(0, 40) + '...'
                : product.title}
            </h2>
            <div className="badge badge-md badge-secondary text-white tracking-tight font-bold">
              New
            </div>
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
