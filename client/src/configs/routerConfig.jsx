// routes.js
import HomePage from "../pages/customer/Home";
import AboutPage from "../pages/customer/About";
import ServicesPage from "../pages/customer/Services";
import ServiceDetail from "../pages/customer/ServiceDetail";
import NewsPage from "../pages/customer/News";
import NewsDetail from "../pages/customer/NewsDetail";
import ContactPage from "../pages/customer/Contact";
import AdminLoginPage from "../pages/admin/Login";
import AdminDashboardPage from "../pages/admin/Dashboard";
// import AdminProductsPage from '../pages/admin/AdminProductsPage';

// Định nghĩa đường dẫn
export const ROUTES = {
  // Customer
  HOME: "/",
  ABOUT: "/about",
  SERVICES: "/services",
  SERVICE_DETAIL: "/services/:slug",
  NEWS: "/news",
  NEWS_DETAIL: "/news/:slug",
  CONTACT: "/contact",
  // Admin
  ADMIN_LOGIN: "/admin/login",
  ADMIN_DASHBOARD: "/admin/dashboard",
  ADMIN_SERVICES: "/admin/services",
};

// Routes khách hàng (public)
export const customerRoutes = [
  { path: ROUTES.HOME, element: <HomePage /> },
  { path: ROUTES.ABOUT, element: <AboutPage /> },
  { path: ROUTES.SERVICES, element: <ServicesPage /> },
  { path: ROUTES.SERVICE_DETAIL, element: <ServiceDetail /> },
  { path: ROUTES.NEWS, element: <NewsPage /> },
  { path: ROUTES.NEWS_DETAIL, element: <NewsDetail /> },
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
