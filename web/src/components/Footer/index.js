import React from 'react';

// Style
import "./styles.css";


function Footer() {
    return(
        <div className="footer-container">
        <div className="head-margin"></div>
        <div className="info-content">

        <div className="footer-end">
          <p> Copyright © {new Date().getFullYear()} Bureau Tech - SisAtas </p>
        </div>
        </div>
      </div>
    )
}

export default Footer;