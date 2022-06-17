import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <App />
        <GlobalStyles />
    </>
);
