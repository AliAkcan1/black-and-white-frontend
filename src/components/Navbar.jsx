import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className='navbar'>
        <div className="nav-logo">
          <span className="sue">sue</span><span className='casey' >casey.</span>
        </div>
        <div className="nav-buttons">
          <div className='dropdown-button'>
            <button className='nav-button-2' onClick={() => setOpen(!open)}>
              <i className={open ? "fa-solid fa-x" : "fa-solid fa-bars"}></i>
            </button>
            <div className='dropdown-menu' style={open ? {visibility: "visible"} : {visibility: "hidden"}}>
              <div className="dropdown-content">
                <ul>
                  <li className='dropdown-li'>
                    <a href="/login">
                      Login
                    </a>
                  </li>
                  <li className='dropdown-li'>
                    <a href="/signup">
                      Sign Up
                    </a>
                  </li>
                  <li className='dropdown-li'>
                    <a href="/">
                      Contact Us
                    </a>
                  </li>
                  <li className='dropdown-li'>
                    <a href="/">
                      Become a Freelancer
                    </a>
                  </li>
                  <li className='dropdown-li'>
                    <a href="/">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
