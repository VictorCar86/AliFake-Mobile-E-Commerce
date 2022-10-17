import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import MainNavbar from './containers/MainNavbar'
import CategoriesPage from './routes/CategoriesPage'
import MainPage from './routes/MainPage'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <MainNavbar />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="categories" element={<CategoriesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App