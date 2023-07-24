import Banner from './components/Banner'
import Filter from './components/Filter'
import Category from './components/Category'
import ProductItem from './components/ProductItem'

export default function Home() {
  return (
    <main>
      <Banner />
      <Filter />
      <Category />
      <ProductItem />
    </main>
  )
}
