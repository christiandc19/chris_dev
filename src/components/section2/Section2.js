import React from "react";
import "./Section2.css";
import { AiOutlineCheck } from 'react-icons/ai';
import Fade from 'react-reveal/Fade';

import Laptop from '../../assets/man_laptop.webp'

const Section2 = () => {
  return (
    <>
      <div className="section2  ">
        <div className="section2-content container">

          <div className="section2-flex">

          <div className="section2-content-left">
          <Fade left>
            <img src={Laptop} alt="man with laptop" loading="lazy"/>
          </Fade>
          </div>

          <div className="section2-content-right">
          <Fade right>
            <h1>WE CREATE A STUNNING WEBSITE</h1> <br />
            <p>
            Your online presence is often the first impression potential customers have of your business. We specialize in crafting websites that captivate audiences and leave a lasting impression.<br /><br /> 
            <ul>
              <li><span><AiOutlineCheck/> </span>Customized Designs</li>
              <li><span><AiOutlineCheck/> </span>User-Centric Experience</li>
              <li><span><AiOutlineCheck/> </span>Mobile Optimization</li>
              <li><span><AiOutlineCheck/> </span>Engaging Visuals</li>
              <li><span><AiOutlineCheck/> </span>SEO Integration</li>
              <li><span><AiOutlineCheck/> </span>Social Media Integration</li>
            </ul>
              
            Ready to elevate your online presence? Contact us today to discuss how we can create a website that sets your brand apart!
            </p>
            </Fade>
          </div>
        </div>
        </div>


      </div>
    </>
  );
};

export default Section2;
