import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar.jsx";
import { Shop } from './pages/shop/shop'
import { Cart } from './pages/cart/cart'
import { ShopContextProvider } from "./context/shop-context";
import { ShopAddtoCart } from "./pages/shopAddtoCart/shopAddtoCart";
import Login from "./pages/login/login.jsx";
import Register from "./pages/register/register.jsx";
import EditAdmin from "./pages/admin/editProfileAdmin/editProfileAdmin.jsx";
import { EditProduct } from "./pages/admin/editProduct/Product.jsx";

function App() {
  return (
    <div className="App"> 
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}/> 
          <Route path="/shop" element={<ShopAddtoCart />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/editAdmin" element={<EditAdmin />}/>
          <Route path="/editInventory" element={<EditProduct />}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  )
};

export default App;
