import './App.css'
import {
  FeaturedProducts,
  Hero,
  Navbar,
  Footer,
  Contact,
  ProductsFilter,
  Cart,
  Error,
} from './components'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProducts title={'Our Best Seller'} />
      <Contact />
      <ProductsFilter />
      <Cart />
      <Error />
      <Footer />
    </>
  )
}

export default App

// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// function App() {
//   const [loading, setLoading] = useState(false)
//   const [data, setData] = useState(null)

//   useEffect(() => {
//     setLoading(true)
//     axios({
//       method: 'GET',
//       baseURL: 'https://fakestoreapi.com',
//       url: '/products',
//     })
//       .then(({ data }) => {
//         setData(data)
//         console.log(data)
//       })
//       .catch((err) => console.dir(err))
//       .finally(() => setLoading(false))
//   }, [])

//   return (
//     <section>
//       {loading && 'Loading...'}
//       {!!data && data.length > 0 ? (
//         data.map((product) => {
//           return (
//             <article key={product.id}>
//               <h2>name: {product.title}</h2>
//               <p>id: {product.id}</p>
//               <p>description: {product.description}</p>

//               <p>price: {product.price}</p>
//               <p>category: {product.category}</p>
//             </article>
//           )
//         })
//       ) : (
//         <p>API did not provided any product, try again.</p>
//       )}
//     </section>
//   )
// }

// export default App
