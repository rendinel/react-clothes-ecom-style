import './App.css'
import { SharedLayout } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'
import Cart from './pages/Cart'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProducts } from './features/cart/cartSlice'
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
    // eslint-disable-next-line
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='products'>
            <Route index element={<Products />} />
            <Route path='/products/:productId' element={<SingleProduct />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
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
