import React from 'react';
import LogoMark from '../LogoMark/LogoMark.jsx';
import MenuIcon from '../Icons/MenuIcon.jsx';
import MenuItem from '../MenuItems/MenuItem.jsx';
import DashboardIcon from '../Icons/DashboardIcon.jsx';
import HomeIcon from '../Icons/HomeIcon.jsx';
import ProjectsIcon from '../Icons/ProjectsIcon.jsx';
import TasksIcon from '../Icons/TasksIcon.jsx';
import ReportingIcon from '../Icons/ReportingIcon.jsx';
import UserCard from '../User/UserCard.jsx';

function SideBar() {
  return (
    <aside className="h-screen">
      <div className="w-96 h-full bg-shade-one rounded-tr-lg rounded-br-lg flex justify-between flex-col">
        <div>
          <header className="p-6 flex justify-between">
            <LogoMark />
            <MenuIcon />
          </header>
          <ul>
            <li className="flex justify-start align-center px-6 py-2">
              <HomeIcon />
              <MenuItem title="Home" />
            </li>
            <li className="flex justify-start align-center px-6 py-2">
              <DashboardIcon className="fill-primary" />
              <MenuItem title="Dashboard" />
            </li>
            <li className="flex justify-start align-center px-6 py-2">
              <ProjectsIcon className="fill-primary" />
              <MenuItem title="Projects" />
            </li>
            <li className="flex justify-start align-center px-6 py-2">
              <TasksIcon className="fill-primary" />
              <MenuItem title="Tasks" />
            </li>
            <li className="flex justify-start align-center px-6 py-2">
              <ReportingIcon className="fill-primary" />
              <MenuItem title="Reporting" />
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <ul>
            <li className="flex justify-start align-center px-6 py-2">
              <HomeIcon />
              <MenuItem title="Notifications" />
            </li>
            <li className="flex justify-start align-center px-6 py-2">
              <DashboardIcon className="fill-primary" />
              <MenuItem title="Support" />
            </li>
            <li className="flex justify-start align-center px-6 py-2">
              <ProjectsIcon className="fill-primary" />
              <MenuItem title="Settings" />
            </li>
          </ul>
          <UserCard />
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
