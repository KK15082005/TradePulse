import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import HomePage from './landing_page/home/homepage';
import SignUp from './landing_page/sign-up/signup';
import AboutPage from './landing_page/about/about';
import ProductPage from './landing_page/products/productpage';
import PricingPage from "./landing_page/pricing/pricing";
import SupportPage from "./landing_page/support/supportpage"
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from './landing_page/footer';
import Navbar from './landing_page/navbar';
import NotFound from './landing_page/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/SignUp" element={<SignUp/>}/>
    <Route path="/About" element={<AboutPage/>}/>
    <Route path="/Product" element={<ProductPage/>}/>
    <Route path="/Pricing" element={<PricingPage/>}/>
    <Route path="/Support" element={<SupportPage/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
);
