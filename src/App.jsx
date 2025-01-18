import 'react'
import './App.css'
import Header from './components/layOut/Header'
import Navbar from './components/layOut/Navbar'
import StaticInfo from './components/hero/StaticInfo'
import CircleCard from './components/circleCard/CircleCard'
import Gif from './components/hero/Gif'
import HeroCard from './components/heroCard/HeroCard'
import SmallCard from './components/heroCard/SmallCard'
import SmallCard2 from './components/heroCard/SmallCard2'
import TrendingProduct from './components/trendingProduct/TrendingProduct'
import TrendingBanner from './components/trendingProduct/TrendingBanner'
import RecommendedProduct from './components/recommendedProduct/RecommendedProduct'
import Banner from './components/recommendedProduct/Banner';
import TopBrands from './components/topBrands/TopBrands'
import PopularBrand from './components/popularBrand/PopularBrand'
import NewsLetter from './components/newsletter/NewsLetter'
import Footer from './components/layOut/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <CircleCard />
      <StaticInfo />
      <Gif />
      <HeroCard />
      <SmallCard />
      <SmallCard2 />
      <TrendingProduct />
      <TrendingBanner />
      <RecommendedProduct />
      <Banner />
      <TopBrands />
      <PopularBrand />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default App