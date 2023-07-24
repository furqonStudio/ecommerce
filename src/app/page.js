import Image from 'next/image'
import Banner from './components/Banner'
import Filter from './components/Filter'
import Category from './components/Category'
import Products from './components/Products'

export default function Home() {
  return (
    <main>
      <Banner />
      <Filter />
      <Category />
      <Products productName={'Produk Baru'} />
    </main>
  )
}
