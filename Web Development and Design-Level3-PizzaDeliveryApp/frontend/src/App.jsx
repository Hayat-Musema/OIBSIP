import { BrowserRouter, Routes,Route} from "react-router-dom";

import Layout from "./layouts/Layout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import { Contact } from "lucide-react";

function App(){
  return(
    <BrowserRouter>
    <Layout>
    <Routes>
        <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact/>} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound/>}/>
      </Routes>
      </Layout>
      </BrowserRouter>
  );
}
export default App;
