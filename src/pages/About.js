
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Tentang from '../components/Tentang'


const About = () => {
    return (
        <div className='flex flex-col w-full items-center'>
        <Navigation />
        <Tentang />

        <Footer/>
        </div>
    )
}
export default About