import 'react'
import './App.css'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogIn from './components/RouterComponents/LogIn'
import Register from './components/RouterComponents/Register'
import NotFound from './components/RouterComponents/NotFound'
import WishList from './components/RouterComponents/WishList'
import Compare from './components/RouterComponents/Compare';
import Cart from './components/RouterComponents/Cart'
import SellOnOthoba from './components/RouterComponents/SellOnOthoba'
import ForgotPassword from './components/RouterComponents/ForgotPassword '
import ProductListingPage from './components/RouterComponents/ProductListingPage'
import ProductDetailPage from './components/RouterComponents/ProductDetailPage'
import Toy from './components/toy/Toy'
import ToyProductPage from './components/RouterComponents/ToyProductPage'
import CancellationAndReturns from './components/RouterComponents/CancellationAndReturns'
import AboutUs from './components/RouterComponents/AboutUs'
import ShoppingPage from './components/RouterComponents/ShoppingPage'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/signIn" element={<LogIn />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/register" element={<Register />} />
      <Route path="/wishList" element={<WishList />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/sell" element={<SellOnOthoba />} />
      <Route path="/ProductListingPage" element={<ProductListingPage />} />
      <Route path="/ProductDetailPage" element={<ProductDetailPage />} />
      <Route path="/toyProductPage" element={<ToyProductPage />} />
      <Route path="/CancellationAndReturns" element={<CancellationAndReturns />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/shop" element={<ShoppingPage />} />
      
    </Routes>
    <Toy />
    </BrowserRouter>
  )
}

export default App