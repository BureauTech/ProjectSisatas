import React from "react";
import {Link} from 'react-router-dom'; 

//Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';

//Pages
import Home from '../Home/index.js';

import "./styles.css";

const Login = () => {
  return (
    <>
      <Header />
      
      <div className="main-container">
        <div className="db-container" width="100%">
          <h1>LOGIN</h1>
          <form className="forms-content-label">
            <input type="text" className="txtbox" 
            />
            <input type="password" className="txtbox" 
            />
          </form> 
          <a href="/home">
            <button type="button" onClick="/home" value="Acessar">  
            ACESSAR
            </button>   
          </a>
       </div>
      </div>

      <Footer />
      
    </>
  );
}

export default Login;
