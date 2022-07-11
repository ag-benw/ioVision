import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/base.css';
import SideBar from './components/SideBar/SideBar.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SideBar />
  </React.StrictMode>,
);
