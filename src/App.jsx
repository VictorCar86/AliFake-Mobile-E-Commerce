import React from 'react'
import "./App.css"
import ReduxProvider from './context/ReduxProvider'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainNavbar from './containers/MainNavbar'
import MainPage from './routes/MainPage'
import ProductViewPage from './routes/ProductViewPage'
import CategoriesPage from './routes/CategoriesPage'
import CartPage from './routes/CartPage'
import AccountPage from './routes/AccountPage'
import NotExistPage from './routes/NotFoundPage'

const App = () => {

  return (
    <>
      <ReduxProvider>
        <BrowserRouter>
          <MainNavbar />
          <Routes>
            <Route index element={<MainPage />} />
              <Route path="product/:id" element={<ProductViewPage />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="account" element={<AccountPage />} />
            <Route path="*" element={<NotExistPage />} />
          </Routes>
        </BrowserRouter>
      </ReduxProvider>
    </>
  )
}

export default App