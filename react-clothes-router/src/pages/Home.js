import { Hero, FeaturedProducts, Contact } from '../components'
import { useSelector } from 'react-redux'

const Home = () => {
  const { products } = useSelector((state) => state.cart)
  const homeProducts = products.slice(0, 4)
  return (
    <main>
      <Hero />
      <FeaturedProducts home title='Latest Arrival' products={homeProducts} />
      <Contact />
    </main>
  )
}

export default Home
