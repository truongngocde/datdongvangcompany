import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  BrowserRouter,
} from "react-router-dom";
import { customerRoutes, adminRoutes } from "./configs/routerConfig";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Component layout cho customer
const CustomerLayout = () => (
  <div className="relative">
    {/* Background gradient */}
    <div className="fixed -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-50"></div>

    <div className="relative z-10 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow overflow-hidden pt-16 md:pt-20">
        {" "}
        {/* Thêm padding top */}
        <Outlet />
      </main>
      <Footer />
    </div>
  </div>
);

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
    
        <Routes>
          {/* Routes khách hàng với Header và Footer */}
          <Route element={<CustomerLayout />}>
            {customerRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>

          {/* Routes admin */}
          {adminRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                route.protected ? (
                  <ProtectedRoute>{route.element}</ProtectedRoute>
                ) : (
                  route.element
                )
              }
            />
          ))}

          {/* Route 404 */}
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
