import React, {useState} from 'react';
import Logo from "../assets/pizzaLogo.png";
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import ReorderIcon from '@material-ui/icons/Reorder';


function Navbar() {
  const [openLinks,setOpenLinks] = useState(false);

  const triggerNav = () => {
    setOpenLinks(!openLinks);
  }

  return (
    <div className='navbar'>
      <div className="leftSide" id={openLinks ? "open" : "close" }>
        <img src={Logo} alt="" />
        <div className="hiddenLinks">
          <Link to="/"> Home</Link>
          <Link to="/menu"> Menu</Link>
          <Link to="/about"> About</Link>
          <Link to="/contact"> Contact</Link></div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home</Link>
        <Link to="/menu"> Menu</Link>
        <Link to="/about"> About</Link>
        <Link to="/contact"> Contact</Link>
        <button onClick={triggerNav}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar