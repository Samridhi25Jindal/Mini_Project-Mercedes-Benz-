import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Routes, Route, Link, Outlet, BrowserRouter as Router } from 'react-router-dom';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Login from './Login';
import Register from './Register';
import Products from './Products';
import Services from './Services';
import CorporateArchives from './CorporateArchives';
import CorporateHistory from './CorporateHistory';
import Vehicles from './Vehicles';
import LegendsGallery from './LegendsGallery';
import Schedules from './Schedules';
import ForgotPassword from './ForgotPassword';
import Footer from './Footer';

const routing = ( 
<Router>
<div id="navbar">
  <Link class="item" to="/">Home</Link>
  <Link class="item" to="/AboutUs">About </Link>
  <Link class="item" to="/Services"> Services </Link>
  <Link class="item" to="/Products"> Cars List </Link>
  <span id="lr">
  <Link class="com" to="/Login"> Login </Link> |
  <Link class="com" to="/Register"> Register </Link>
  </span>
  <Link class="item" to="/Contact"> Contact Us </Link>
</div>
  
<Routes>
    <Route path="/" element={ <App/> } />
    <Route path="/AboutUs" element={ <AboutUs/>} />
    <Route path="/Contact" element={ <Contact/>} />
    <Route path="/Login" element={ <Login/>} />
    <Route path="/Register" element={ <Register/>} />
    <Route path="/Products" element={ <Products/>} />
    <Route path="/Services" element={ <Services/>} />
    <Route path="/CorporateArchives" element={ <CorporateArchives/>} />
    <Route path="/CorporateHistory" element={ <CorporateHistory/>} />
    <Route path="/Vehicles" element={ <Vehicles/>} />
    <Route path="/LegendsGallery" element={ <LegendsGallery/>} />
    <Route path="/Schedules" element={ <Schedules/>} />
    <Route path="/ForgotPassword" element={ <ForgotPassword/> } />
    
  </Routes>
</Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div id="first">
    <img src="https://1000logos.net/wp-content/uploads/2018/04/Mercedes-Benz-Logo.png" height="75px" width="100px"/>
    <span class="span1">Mercedez-Benz</span>
    {routing}
    </div>
  </React.StrictMode>
);


