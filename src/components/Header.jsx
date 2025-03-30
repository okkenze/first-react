
// import logo from '../assets/logo.png';
//import logo from '/src/assets/logo.png';
import reactlogo from '../assets/react-logo.png';
function Header() {
    return (
    // <header className="header"><img  src={logo} alt="Header" width="60px" height="60px"/>React Tutorial</header>
    <header >
      <img  src={reactlogo} alt="logo" />
      <span className="header-span">React Tutorial</span>
      <nav>
        <ul className="nav-list">
          <li  className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
      </header>
   )
 }
 
 export default Header
 