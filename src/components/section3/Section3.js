import React from "react";
import "./Section3.css";
import { AiOutlineCheck } from 'react-icons/ai';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from 'react-scroll'

import Laptop2 from '../../assets/man_laptop2.webp'

const Section3 = () => {
  return (
    <>
      <div className="section3  ">
        <div className="section3-content container">

          <div className="section3-flex">

          <div className="section3-content-left">

            <Fade left>
            <h1>OUR WORK</h1> <br />
            <p>
            We take pride in delivering exceptional website solutions that not only meet our clients' needs but also exceed their expectations. Take a look at some of our recent projects to see the quality and creativity we bring to every endeavor.<br /><br /> 



            <h2>Technologies Used:</h2>

            <ul>
              <li><span><AiOutlineCheck/> </span>HTML5, CSS3, JavaScript</li>
              <li><span><AiOutlineCheck/> </span>Responsive Web Design (RWD)</li>
              <li><span><AiOutlineCheck/> </span>React.js for Frontend User Interface</li>
              <li><span><AiOutlineCheck/> </span>Search Engine Optimization (SEO) Strategies</li>
              <li><span><AiOutlineCheck/> </span>WordPress for Content Management</li>
              <li><span><AiOutlineCheck/> </span>Professional design on WiX or Weebly platform</li>
              <li><span><AiOutlineCheck/> </span>and More...</li>



            </ul>

            </p>

            <div className='section3-btn'>
                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                            <Link to="/portfolio">
                                <Fade bottom>
                                    <button>VIEW OUR WORK</button>
                                </Fade>
                            </Link>
                        </LinkRoll>
          </div>


            </Fade>


          </div>

          <div className="section3-content-right">

          <Fade right>
            <img src={Laptop2} alt="man with laptop" loading="lazy"/>
          </Fade>

          </div>


        </div>
        </div>


      </div>
    </>
  );
};

export default Section3;
