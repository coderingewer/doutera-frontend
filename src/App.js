import './App.css';
import TopBar from './bars/TopBar';
import { Route, Router, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Home from './pages/Home';
import DealerShip from './pages/DealerShip';
import Contact from './pages/Contact';
import SideMenu from './bars/SideMenu';
import AboutUs from './pages/AboutUs';
import AdminPanel from './admin/AdminPanel';
import ProductsOn from './admin/ProductOn';
import DealershipRequests from './admin/DealershipRequests';
import NewProduct from './admin/NewProduct';
import AdminLogin from './admin/AdminLogin';
import UpdateDetails from './admin/UpdateDetails';
import UpdateProduct from './admin/UpdateProduct';
import Footer from './bars/Footer';

function App() {
  return (
    <div className="App">
      <SideMenu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modely-aksesories" element={<Products />} />
        <Route path="/dealership-form" element={<DealerShip />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin-panel" element={<AdminPanel />}/>
        <Route path="/admin-panel/login" element={<AdminLogin />}/>
        <Route path="/admin-panel/products" element={<ProductsOn />} />
        <Route path="/admin-panel/dealership-requests" element={<DealershipRequests />} />
        <Route path="/admin-panel/new-product" element={<NewProduct />} />
        <Route path="/admin-panel/update-product/:id" element={<UpdateProduct />} />
        <Route path="/admin-panel/update-details" element={<UpdateDetails />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
