import React from "react";
import {Link} from 'react-router-dom'; 

//Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import "./styles.css";

const Home = () => {
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
              
          <button type="button">  
            CONECTAR
          </button>   
       </div>
      </div>

      <Footer />
      
    </>
  );
}

export default Home;
