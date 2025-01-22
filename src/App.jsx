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

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/signIn" element={<LogIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/wishList" element={<WishList />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/sell" element={<SellOnOthoba />} />
      
    </Routes>
    </BrowserRouter>
  )
}

export default App