import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Button.scss';
import './Sidebar.scss';

import LogoMark from '../LogoMark/LogoMark.jsx';
import MenuIcon from '../Icons/MenuIcon.jsx';
import MenuItem from '../MenuItems/MenuItem.jsx';
import UserCard from '../User/UserCard.jsx';
import SidebarData from '../../data/SidebarData.jsx';

function SideBar() {
  const [sidebar, toggleSidebar] = useState(true);

  const expandSidebar = () => toggleSidebar(!sidebar);

  return (
    <aside className={sidebar ? 'nav-bar expanded' : 'nav-bar collapsed'}>
      <div className="menu w-96 bg-shade-one rounded-tr-lg rounded-br-lg flex justify-between flex-col">
        <div>
          <header className="p-6 flex justify-between">
            <LogoMark />
            <button type="button" onClick={expandSidebar}>
              <MenuIcon />
            </button>
          </header>
          <ul>
            {SidebarData.map((item) => (
              <li
                className={
                    sidebar
                      ? 'flex justify-start items-center px-6 py-2'
                      : 'flex justify-start items-center px-2 py-2'
                  }
              >
                <NavLink
                  to={item.path}
                  className={
                      sidebar
                        ? 'btn w-full h-12 px-2 rounded-md flex items-center hover:bg-shade-two transition-colors duration-200'
                        : 'btn w-full h-12 px-2 rounded-md flex justify-center items-center hover:bg-shade-two transition-colors duration-200'
                    }
                >
                  {item.icon}
                  <MenuItem title={item.title} />
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <UserCard openSidebar={!!sidebar} />
      </div>
    </aside>
  );
}

export default SideBar;
