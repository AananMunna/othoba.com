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
import CareerPage from './components/RouterComponents/CareerPage'
import ContactUs from './components/RouterComponents/ContactUs'
import OthobaCertificate from './components/RouterComponents/OthobaCertificate'
import NextDayDeliveryTC from './components/RouterComponents/NextDayDeliveryTC'
import OrdersPage from './components/RouterComponents/OrdersPage'
import AddressPage from './components/RouterComponents/AddressPage'
import OrderHistory from './components/RouterComponents/OrderHistory'
import TrackMyOrder from './components/RouterComponents/TrackMyOrder'
import PaymentMethods from './components/RouterComponents/PaymentMethods'
import SupportCenter from './components/RouterComponents/SupportCenter'
import HowToShopOnOthoba from './components/RouterComponents/HowToShopOnOthoba'
import FeaturedRecommendations from './components/RouterComponents/FeaturedRecommendations'
import AccountPage from './components/RouterComponents/AccountPage'
import ProductSearchPage from './components/RouterComponents/ProductSearchPage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
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
      <Route path="/career" element={<CareerPage />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/OthobaCertificate" element={<OthobaCertificate />} />
      <Route path="/NextDayDeliveryTC" element={<NextDayDeliveryTC />} />
      <Route path="/OrdersPage" element={<OrdersPage />} />
      <Route path="/AddressPage" element={<AddressPage />} />
      <Route path="/OrderHistory" element={<OrderHistory />} />
      <Route path="/TrackMyOrder" element={<TrackMyOrder />} />
      <Route path="/PaymentMethods" element={<PaymentMethods />} />
      <Route path="/SupportCenter" element={<SupportCenter />} />
      <Route path="/HowToShopOnOthoba" element={<HowToShopOnOthoba />} />
      <Route path="/FeaturedRecommendations" element={<FeaturedRecommendations />} />
      <Route path="/AccountPage" element={<AccountPage />} />
      <Route path="/ProductSearchPage" element={<ProductSearchPage />} />
      
    </Routes>
    <Toy />
    </BrowserRouter>
  )
}

export default App