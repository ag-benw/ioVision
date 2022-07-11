import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/base.css';
import App from './components/App.jsx';
import SideBar from './components/SideBar/SideBar.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <SideBar />
  </React.StrictMode>
);