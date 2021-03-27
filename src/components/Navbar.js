import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import App from '../App';
import Form from '../loginPage/Form';

function Navbar() {
  const usehistory = useHistory();
  const [sidebar, setSidebar] = useState(false);
  const [logOut,setLogOut] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const LogOut = () => {
        usehistory.push('/');
  }

  return (
   
    <>
    {/* {logOut && <Form />}
    {logOut || */}
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link> 
          <button className="btn btn-outline-primary py-2 mt-2" onClick={LogOut}>Log Out</button>
        </div>  
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}> 
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li> 
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav> 
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
