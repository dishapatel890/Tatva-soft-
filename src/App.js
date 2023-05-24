import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/Register'
import Login from './pages/Login'
import Product from './pages/Product';
import CartItem from './pages/CartItem';
import CartPage from './pages/CartPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' Component={Login} />
          <Route path='/register' Component={Register} />
          <Route path='/Product' Component={Product} />
          <Route path='/cart page' Component={CartPage} />
          <Route path='/cart item' Component={CartItem} />
          <Route path='/' Component={Register} />
        </Routes>

      </BrowserRouter>


    </>
  );
}

export default App;
