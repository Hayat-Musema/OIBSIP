import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import AdminRoute from "./components/auth/AdminRoute";
import Menu from "./pages/Menu";
import PizzaDetails from "./pages/PizzaDetails";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Deals from "./pages/Deals";
import TrackOrder from "./pages/TrackOrder";
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:pizzaId" element={<PizzaDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/cart" element={<Cart />} />
          <Route element={<ProtectedRoute />}>
           <Route path="/profile" element={<Profile />} />
         </Route>
         <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<AdminRoute />}>
  <Route path="/admin" element={<Admin />} />
</Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
