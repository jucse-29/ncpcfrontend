import React from 'react';
import {Container} from "react-bootstrap";
import icpc from '../Assets/Images/icpc_logo_small.png';
import ju from '../Assets/Images/juLogo.jpg';
import bcc from '../Assets/Images/bcc_logo.png';
import db from '../Assets/Images/digital-bangladesh.png';
import ict from '../Assets/Images/ICT_Division.png';
import ju_writing from '../Assets/Images/ju_writing.png';
import ju_cse from '../Assets/Images/dept/ju_cse.png';
import cse from "../Assets/Images/dept/Untitled - Copy.png";
import onlycse from "../Assets/Images/dept/onlycse.png";
import ju_cse_copy from '../Assets/Images/dept/ju_cse_alumni - Copy.png';
    
function Logo(props) {
   
    return (
        <Container fluid="true" className="logoContainer p-2">
           <div className="logoLeftDiv">
               <img src={icpc} alt=""/>
               <img src={ju} alt=""/>
               <img src={ju_cse_copy} alt=""/>
           </div>
         
            <div className="logoRightDiv">
               <img src={db} alt=""/>
               <img src={ict} alt=""/>
               <img src={bcc} alt=""/>
           </div>
        </Container>
    );
}

export default Logo;
