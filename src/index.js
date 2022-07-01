import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Users from './pages/Users';
import GlobalStyles from './globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <Home />
        <Users />
        <GlobalStyles />
    </>
);
