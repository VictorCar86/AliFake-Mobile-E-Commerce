import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppProvider from './context/AppProvider'
import MainNavbar from './containers/MainNavbar'
import MainPage from './routes/MainPage'
import CategoriesPage from './routes/CategoriesPage'
import CartPage from './routes/CartPage'
import AccountPage from './routes/AccountPage'

const App = () => {

  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <MainNavbar />
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="account" element={<AccountPage />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  )
}

export default App