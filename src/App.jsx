import React from 'react';
import "./App.css";
import ReduxProvider from './context/ReduxProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainNavbar from './containers/MainNavbar';
import MainPage from './routes/MainPage';
import ProductViewPage from './routes/ProductViewPage';
import CategoriesPage from './routes/CategoriesPage';
import SearchPage from './routes/SearchPage';
import CartPage from './routes/CartPage';
import OrderPage from './routes/OrderPage';
import AccountPage from './routes/AccountPage';
import WishListPage from './routes/WishListPage';
import ViewedPage from './routes/ViewedPage';
import NotExistPage from './routes/NotFoundPage';
import PurchaseDonePage from './routes/PurchaseDonePage';

const App = () => {
  return (
    <ReduxProvider>
      <BrowserRouter>
        <MainNavbar />
        <Routes>
          <Route index element={<MainPage />} />
            <Route path="product/:id" element={<ProductViewPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="cart" element={<CartPage />} />
            <Route path="cart/confirm" element={<OrderPage />} />
            <Route path="cart/purchase-done" element={<PurchaseDonePage />} />
          <Route path="account" element={<AccountPage />} />
            <Route path="account/wishlist" element={<WishListPage />} />
            <Route path="account/viewed" element={<ViewedPage />} />
          <Route path="*" element={<NotExistPage />} />
        </Routes>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App