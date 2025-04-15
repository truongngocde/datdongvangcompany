// routes.js
import HomePage from "../pages/customer/Home";
import ProductsPage from "../pages/customer/Products";
import AboutPage from "../pages/customer/About";
import ContactPage from "../pages/customer/Contact";

import AdminLoginPage from "../pages/admin/Login";
import AdminDashboardPage from "../pages/admin/Dashboard";
// import AdminProductsPage from '../pages/admin/AdminProductsPage';

// Định nghĩa đường dẫn
export const ROUTES = {
  // Customer
  HOME: "/",
  PRODUCTS: "/products",
  ABOUT: "/about",
  CONTACT: "/contact",
  // Admin
  ADMIN_LOGIN: "/admin/login",
  ADMIN_DASHBOARD: "/admin/dashboard",
  ADMIN_PRODUCTS: "/admin/products",
};

// Routes khách hàng (public)
export const customerRoutes = [
  { path: ROUTES.HOME, element: <HomePage /> },
  { path: ROUTES.PRODUCTS, element: <ProductsPage /> },
  { path: ROUTES.ABOUT, element: <AboutPage /> },
  { path: ROUTES.CONTACT, element: <ContactPage /> },
];

// Routes admin (protected + login)
export const adminRoutes = [
  { path: ROUTES.ADMIN_LOGIN, element: <AdminLoginPage /> }, // Không bảo vệ
  {
    path: ROUTES.ADMIN_DASHBOARD,
    element: <AdminDashboardPage />,
    protected: true,
  },
  //   { path: ROUTES.ADMIN_PRODUCTS, element: <AdminProductsPage />, protected: true },
];
