import { useNavigate } from 'react-router-dom';
import '../css/header.css';

function Header(){
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate("/login")
  }
    return(
        <>
        <input id="page-nav-toggle" class="main-navigation-toggle" type="checkbox" />
        <label for="page-nav-toggle">
          <svg class="icon--menu-toggle" viewBox="0 0 60 30">
            <g class="icon-group">
             <g class="icon--menu">
                <path d="M 6 0 L 54 0" />
                <path d="M 6 15 L 54 15" />
                <path d="M 6 30 L 54 30" />
            </g>
            <g class="icon--close">
                <path d="M 15 0 L 45 30" />
                <path d="M 15 30 L 45 0" />
            </g>
          </g>
          </svg>
        </label>

        <nav class="main-navigation">
           <ul>
           <li><a href="/home">Home</a></li>
           <li><a href="/about">About</a></li>
           <li><a href="/contact">Contact</a></li>
           <li><a href="/portfolio">Portfolio</a></li>
           <li><a href="#" onClick={logout}>Logout</a></li>
           </ul>
        </nav>
        </>
    )
}
export default Header;