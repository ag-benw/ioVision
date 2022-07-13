import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/styles/base.css';
import SideBar from './components/SideBar/SideBar.jsx';
import Home from './pages/Home/Home.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Projects from './pages/Projects/Projects.jsx';
import Reporting from './pages/Reporting/Reporting.jsx';
import Settings from './pages/Settings/Settings.jsx';
import Support from './pages/Support/Support.jsx';
import Notifications from './pages/Notifications/Notifications.jsx';
import Tasks from './pages/Tasks/Tasks.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={(
            <main className="flex m-0 bg-shade-two">
              <SideBar />
              <Home />
            </main>
          )}
        />
        <Route
          path="dashboard"
          element={(
            <main className="flex m-0 bg-shade-two">
              <SideBar />
              <Dashboard />
            </main>
          )}
        />
        <Route
          path="projects"
          element={(
            <main className="flex m-0 bg-shade-two">
              <SideBar />
              <Projects />
            </main>
          )}
        />
        <Route
          path="reporting"
          element={(
            <main className="flex m-0 bg-shade-two">
              <SideBar />
              <Reporting />
            </main>
          )}
        />
        <Route
          path="settings"
          element={(
            <main className="flex m-0 bg-shade-two">
              <SideBar />
              <Settings />
            </main>
          )}
        />
        <Route
          path="support"
          element={(
            <main className="flex m-0 bg-shade-two">
              <SideBar />
              <Support />
            </main>
          )}
        />
        <Route
          path="notifications"
          element={(
            <main className="flex m-0 bg-shade-two">
              <SideBar />
              <Notifications />
            </main>
          )}
        />
        <Route
          path="tasks"
          element={(
            <main className="flex m-0 bg-shade-two">
              <SideBar />
              <Tasks />
            </main>
          )}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
