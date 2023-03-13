import {
  ADMIN_ROUTE,
  CART_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from './utils/consts';
import Admin from './pages/Admin';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import Auth from './pages/Auth';
import DevicePage from './pages/DevicePage';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Compoment: Admin,
  },
  {
    path: CART_ROUTE,
    Compoment: Cart,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Compoment: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Compoment: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Compoment: Auth,
  },
  {
    path: DEVICE_ROUTE + '/:id',
    Compoment: DevicePage,
  },
];
