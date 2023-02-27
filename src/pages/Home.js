import Card from "../components/Card"
import Carousel from "../components/Carousel"
import Navigation from '../components/Navigation'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'


const Home = () => {
    return (
        <div className="pt-[80px]">
        <Navigation />
        <Carousel />
        <Card/>
        <Gallery />
        <Footer/>
        </div>
    )
}

export default Home