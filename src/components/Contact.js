import Navbar from '../components/Navigation';
import Footer from '../components/Footer';
import '../css/form.css'
import logo from '../assets/logo.png';
import { IoLogoWhatsapp, IoLogoYoutube, IoLogoFacebook, IoLogoInstagram } from "react-icons/io";

const Contact = () => {
    return ( 
    <>
    <div className='flex flex-col space-y-[20px] pt-[70px]'>
        <Navbar/>                                                       
        <div className='flex flex-col space-y-[10px] items-center mt-[40px]'>
        <h1 className='text-4xl'>Hubungi Kami</h1>
        <div className='flex flex-row ml-8'>
            <div className='flex flex-col mr-5'>
                <h1 className='text-xl'>Jl.Buah batu NO 107 Bandung Indonesia</h1>
                <h2>PT Grand Hijau.id</h2>
            </div>
            <span className='border-r-4 border-black h-[130px]'></span>
            <div className='flex flex-row'>
            <div className='flex flex-col ml-5'>
                <div className='flex flex-row'>
                    <IoLogoYoutube className='mr-2 h-14 w-14'/>
                    <div className='flex flex-col'>
                    <h1>Youtube</h1>
                    <p>GH Group</p>
                    </div>
                    </div>
                    <div className='flex flex-row mt-4'>
                    <IoLogoFacebook className='mr-2 h-14 w-14'/>
                    <div className='flex flex-col'>
                    <h1>Faceboook</h1>
                    <p>Coming Soon</p>
                    </div>
                    </div>
                </div>
                <div className='flex flex-col ml-10'>
                <div className='flex flex-row'>
                    <IoLogoWhatsapp className='mr-2 h-14 w-14'/>
                    <div className='flex flex-col'>
                    <h1>whatsapp</h1>
                    <p>087912438022</p>
                    </div>
                    </div>
                    <div className='flex flex-row mt-4'>
                    <IoLogoInstagram className='mr-2 h-14 w-14'/>
                    <div className='flex flex-col'>
                    <h1>Instagram</h1>
                    <p>gh_groupid</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    <h1 className='mt-10'>Tuliskan Keluh kesah anda</h1>
        <form id="form" className="topBefore">
            <input className='mb-4 pusing' id="name" type="text" placeholder="NAME" />
            <input className='mb-4  pusing' id="email" type="text" placeholder="E-MAIL" />
            <textarea
            className='mb-4'
            id="message"
            type="text"
            placeholder="MESSAGE"
            defaultValue={""}
            />
            <input className="pusing" type="submit" defaultValue="GO!" />
        </form>
        <div className="row">
                <div className="column1 ml-20 ">
                    <img src={logo}  width={300} className="ml-14"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis accusamus ea ducimus exercitationem beatae eius fugiat consequatur reiciendis voluptatem quibusdam ipsam laudantium, id sed tenetur. Nobis ea fuga corporis, labore ut quaerat tempora totam est excepturi reiciendis? Reiciendis vitae error exercitationem repudiandae minima laborum voluptates at possimus quos doloribus doloremque architecto debitis, repellat ipsam sunt totam. Odio neque omnis, magnam velit </p>
                </div>
                <div className="column ml-20">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut debitis quam minus officia numquam ipsum? Id veniam, expedita ducimus recusandae sapiente possimus laborum aspernatur, consequuntur quisquam nesciunt error maiores sint. Ab cum dignissimos dicta neque sint iure recusandae quia commodi fuga, aliquam voluptate aut cupiditate nisi repellat blanditiis dolore eius illo corporis officiis! Minus aliquam quae libero veniam sequi, dolorum, molestias illum quasi consequuntur ut eius accusamus cupiditate iure dolore dicta tempore neque, mollitia nobis at! Consectetur eaque praesentium aperiam quia neque? Autem nam ullam vel saepe modi, sint dignissimos consequuntur eius architecto accusantium iste repellat ducimus eum aliquid!</p>
                    <button className=' mt-1'>Read More</button>
                </div>
            </div>
    <Footer/>
    </>
    );
}
 
export default Contact;