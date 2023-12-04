import Hamburger from './Hamburger'
import {useState} from 'react';

export default function Navbar(){
  const [open, setOpen] = useState(false);
  const closeButton = <button className='nav-button-2' onClick={() => setOpen(!open)}>
                        <i class="fa-solid fa-x"></i>
                      </button>;
  const hamburgerButton = <button className='nav-button-2' onClick={() => setOpen(!open)}>
                            <i className="fa-solid fa-bars"></i>
                          </button>;
                      
  return (
    <div>
      <nav className='navbar'>
        <div className="nav-logo">
            <span className="sue">sue</span><span className='casey' >casey.</span>
        </div>
        <div className="nav-buttons">
            <button className='nav-button-1'>
              <a href="/login">
                Let's Talk  <i className="fa-solid fa-arrow-right"></i>
              </a>
            </button>
            {open ? closeButton : hamburgerButton}
        </div>
        {open && <Hamburger />}
      </nav>
    </div>
  )
};
