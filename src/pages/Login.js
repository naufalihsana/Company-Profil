import '../css/login.css';
import logo from '../assets/logoo.png';
import { Link } from 'react-router-dom';


const Login = () => {

  return (
<div className="login-wrapper">
  <form action className="form">
  <img src={logo} />
    <h2>Login</h2>
    <div className="input-group">
      <input type="text" name="loginUser" id="loginUser"/>
      <label htmlFor="loginUser">Username</label>
    </div>
    <div className="input-group">
      <input type="password" name="loginPassword" id="loginPassword" />
      <label htmlFor="loginPassword">Password</label>
    </div>
    <Link to='/'><input type="submit" defaultValue="Login" className="login" /></Link>
    <a href="#register" className="register">
      register
    </a>
  </form>
  <div id="register">
    <form action className="form">
      <a href="#" className="close">
      </a>
      <h2>register</h2>
      <div className="input-group">
        <input type="email" name="email" id="email" />
        <label htmlFor="email">Email</label>
      </div>
      <div className="input-group">
        <input type="password" name="loginPassword" id="loginPassword" />
        <label htmlFor="loginPassword">Password</label>
      </div>
      <div className="input-group">
        <input type="password" name="loginPassword" id="loginPassword" />
        <label htmlFor="loginPassword">konfirmassi password</label>
      </div>
      <Link to='/'><input type="submit" defaultValue="Submit" className="login pl-0" /></Link>
    </form>
  </div>
</div>
  )
}

export default Login