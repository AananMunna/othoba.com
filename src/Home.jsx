import 'react'
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
import NewsLetter from './components/newsLetter/NewsLetter'
import Footer from './components/layOut/Footer'
import PhonNavbar from './components/phonNavbar/PhonNavbar'
import ImageCarousel from './components/imageCarousel/ImageCarousel'
import ImageGallery from './components/imageGallery/ImageGallery'

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <CircleCard />
      <ImageCarousel />
      <StaticInfo />
      <Gif />
      <HeroCard />
      <SmallCard />
      <SmallCard2 />
      <ImageGallery />
      <TrendingProduct />
      <TrendingBanner />
      <RecommendedProduct />
      <Banner />
      <TopBrands />
      <PopularBrand />
      <NewsLetter />
      <Footer />
      <PhonNavbar />
    </>
  )
}

export default Home