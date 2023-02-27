import '../css/gallery.css';
import {BsChevronDown } from "react-icons/bs"; 
import img from '../assets/rumah1.jpeg';
import img_1 from '../assets/rumah2.jpeg';
import logo from '../assets/logo.png';
import React from 'react';


function Gallery() {
    return(
        <div className='judul'>
            <h1>Gallery</h1>
            <span></span>
            <div className="kartu" id="GALLERY">
                <div className="kartu-atas">
                    <div className="kartu1"></div>
                    <div className="kartu2"></div>
                    <div className="kartu2"></div>
                </div>
                <div className="kartu-bawah">
                    <div className="kartu3"></div>
                    <div className="kartu4"></div>
                    <div className="kartu4"></div>
                </div>
            </div>
            <div className='cart'>
                <div className="card_1 ml-40">
                <img src={img} alt="" height={250} width={250}/>
                <div className="text_1">
                    <h2 className='ml-4 text-4xl'>Produk</h2>
                    <p className="kata_1 text-justify ml-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                    porro itaque molestias accusamus impedit deleniti est iusto rem
                    nam unde at, tenetur saepe quisquam, eligendi quis provident odit
                    dolorem quidem.
                    </p>
                    <button className='ml-4 mt-1'>Read More</button>
                </div>
                </div>
                <div className="card_2 mr-40">
                <img src={img_1} alt="" height={250} width={250}/>
                <div className="text_2">
                <h2 className='ml-4 text-4xl'>Produk</h2>
                    <p className="kata_2 text-justify ml-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Temporibus provident minima incidunt unde soluta doloribus
                    nesciunt praesentium, fugiat, repellendus impedit quisquam rem
                    distinctio dolores laborum sunt labore tempora, aut iure!
                    </p>
                    <button className='ml-4 mt-1'> Read More </button>
                </div>
                </div>
            </div>
            <div className='cart mt-10 '>
                <div className="card_1 ml-40">
                <img src={img} alt="" height={250} width={250}/>
                <div className="text_1">
                <h2 className='ml-4 text-4xl'>Produk</h2>
                    <p className="kata_1 text-justify ml-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                    porro itaque molestias accusamus impedit deleniti est iusto rem
                    nam unde at, tenetur saepe quisquam, eligendi quis provident odit
                    dolorem quidem.
                    </p>
                    <button className='ml-4 mt-1'>Read More</button>
                </div>
                </div>
                <div className="card_2 mr-40">
                <img src={img_1} alt="" height={250} width={250}/>
                <div className="text_2">
                <h2 className='ml-4 text-4xl'>Produk</h2>
                    <p className="kata_2 text-justify ml-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Temporibus provident minima incidunt unde soluta doloribus
                    nesciunt praesentium, fugiat, repellendus impedit quisquam rem
                    distinctio dolores laborum sunt labore tempora, aut iure!
                    </p>
                    <button className='ml-4 mt-1'> Read More </button>
                </div>
                </div>
            </div>
            <div className="tombolicon ml-52">
            <span href=""><BsChevronDown/></span>
            </div>
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
        </div>
    );
}

export default Gallery;