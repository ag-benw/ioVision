import React from 'react';

import DashboardIcon from '../components/Icons/DashboardIcon.jsx';
import HomeIcon from '../components/Icons/HomeIcon.jsx';
import ProjectsIcon from '../components/Icons/ProjectsIcon.jsx';
import TasksIcon from '../components/Icons/TasksIcon.jsx';
import ReportingIcon from '../components/Icons/ReportingIcon.jsx';
import NotificationNumber from '../components/NotificationNumber/NotificationNumber.jsx';

const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <HomeIcon className="fill-primary" />,
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <DashboardIcon className="fill-primary" />,
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <ProjectsIcon className="fill-primary" />,
  },
  {
    title: 'Tasks',
    path: '/tasks',
    icon: <TasksIcon className="fill-primary" />,
  },
  {
    title: 'Reporting',
    path: '/reporting',
    icon: <ReportingIcon className="fill-primary" />,
  },
  {
    title: 'Notification',
    path: '/notifications',
    icon: <HomeIcon className="fill-primary" />,
    notifications: <NotificationNumber />,
  },
  {
    title: 'Support',
    path: '/support',
    icon: <DashboardIcon className="fill-primary" />,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <ReportingIcon className="fill-primary" />,
  },
];

export default SidebarData;