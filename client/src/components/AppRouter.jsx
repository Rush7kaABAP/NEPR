import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from '../pages/Admin';
import Auth from '../pages/Auth';
import Cart from '../pages/Cart';
import DevicePage from '../pages/DevicePage';
import Shop from '../pages/Shop';

import { useSelector } from 'react-redux';
import { selectUserAuth } from '../store/modules/user/selectors';

const AppRouter = () => {
  const isAuth = useSelector(selectUserAuth);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Shop />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/registration" element={<Auth />} />
        <Route path="/device/:id" element={<DevicePage />} />
        {isAuth && <Route key="admin" path="/admin" element={<Admin />} /> && (
          <Route key="cart" path="/cart" element={<Cart />} />
        )}
        <Route path="*" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
