import React, {useState} from 'react';
import {IconContext} from 'react-icons/lib';
import {Link} from 'react-router-dom';
import * as FavIcon from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
//import * as IoIcons from 'react-icons/io';
import {SidebarData} from './sidebardata';

import '../../src/NavBar.css';

const NavBar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{color: '#ff'}}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FavIcon.FaBars onClick={showSidebar} />
          </Link>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </Link>
            </li>

            {SidebarData.map((item) => {
              return (
                <li className={item.cName}>
                  <Link to={item.path}>{item.icon}</Link>
                  <span>{item.title}</span>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
