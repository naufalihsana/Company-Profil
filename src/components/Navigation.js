import { Link } from 'react-router-dom';
import '../css/nav.css';

function Navigation() {
    return(
    <div class="bagian w-full fixed top-0 left-0 z-50"> 
        <header class="header">
            <h1 class="logo"><a href="#">GrandHijau.id</a></h1>
          <ul class="main-nav">
              <li><a href="/">Home</a></li>
              <li><a href="#">visi</a></li>
              <li><a href="#">misi</a></li>
              <li><a href="/about">tentang</a></li>
              <li><a href="/contact">Contact</a></li>
              <button><a href='/Login'>LOGIN</a></button>
          </ul>
        </header> 
    </div>
    );
}

export default Navigation;