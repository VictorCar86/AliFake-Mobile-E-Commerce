import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import MainNavbar from './containers/MainNavbar'
import AppProvider from './context/AppProvider'
import CategoriesPage from './routes/CategoriesPage'
import MainPage from './routes/MainPage'

const App = () => {

  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <MainNavbar />
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="categories" element={<CategoriesPage />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  )
}

export default App