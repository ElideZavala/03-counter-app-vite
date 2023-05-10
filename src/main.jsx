import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Otro } from './otro';
// import App from './HelloWorldApp';
import './styles.css';
import CouterApp from './couterApp';


// const title = 'React web of Elide';
const value = 10;

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App /> */}
        {/* <Otro/> */}
        <CouterApp value={ value } />
    </React.StrictMode>
);