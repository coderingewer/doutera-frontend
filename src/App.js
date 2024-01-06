import './App.css';
import TopBar from './bars/TopBar';
import { Route, Router, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Home from './pages/Home';
import DealerShip from './pages/DealerShip';
import Contact from './pages/Contact';
import SideMenu from './bars/SideMenu';

function App() {
  return (
    <div className="App">
      <SideMenu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modely-aksesories" element={<Products />} />
        <Route path="/dealership-form" element={<DealerShip />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
