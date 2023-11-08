import React from 'react'
import './Ecommerce.css'

import { AiOutlineCheck } from 'react-icons/ai';

const Ecommerce = () => {
  return (
    <div className='ecommerce'>
            <div className='ecommerce-content container'>

{/* WEB PACK 1 */}

                    <div className='ecommerce-flex'>

                            <div className='ecommerce-flex-left'>
                                <h1>E-COMMERCE</h1>
                                <h1>$3,450</h1>
                            </div>

                            <div className='ecommerce-flex-right'>
                                <p>This package provides an e-commerce website featuring a secure shopping experience for your customers. Consider an accompanying SEO package to boost the visibility of your products in internet search results.</p>
                                
                                <div className='ecommerce-package'>
                                    <div className='ecommerce-package-left'>
                                        <h1>DESIGN:</h1>
                                        <ul>
                                        <li><span><AiOutlineCheck/> </span>Professional design on WiX or Weebly platform.</li>
                                        <li><span><AiOutlineCheck/> </span>Up to 5 web pages.</li>
                                        <li><span><AiOutlineCheck/> </span>Up to 10 hours total for design and revisions*.</li>
                                        <li><span><AiOutlineCheck/> </span>WiX or Weebly gallery stock photography and graphics.</li>
                                        <li><span><AiOutlineCheck/> </span>Minor post-production revisions** for one year.</li>
                                        </ul>

                                        <h1>SERVICE:</h1>
                                        <ul>
                                        <li><span><AiOutlineCheck/> </span>One year domain registration.</li>
                                        <li><span><AiOutlineCheck/> </span>One year of hosting.</li>
                                        <li><span><AiOutlineCheck/> </span>Basic optimization</li>
                                        <li><span><AiOutlineCheck/> </span>(mobile friendly visibility on Google).</li>
                                        <li><span><AiOutlineCheck/> </span>SSL certificate (WiX only).</li>
                                        </ul>
                                    </div>

                                    <div className='ecommerce-package-right'>
                                        <h1>CUSTOMER PROVIDES:</h1>
                                        <ul>
                                        <li><span><AiOutlineCheck/> </span>Text for content.</li>
                                        <li><span><AiOutlineCheck/> </span>Production ready graphics.</li>
                                        <li><span><AiOutlineCheck/> </span>High resolution photographs.</li>
                                        </ul>

                                        <h1>NOT INCLUDED: </h1>
                                        <ul>
                                        <li><span><AiOutlineCheck/> </span>For-purchase stock photography and graphics.</li>
                                        <li><span><AiOutlineCheck/> </span>Logo design.</li>
                                        <li><span><AiOutlineCheck/> </span>One-on-one training.</li>
                                        <li><span><AiOutlineCheck/> </span>Complex research and troubleshooting.</li>
                                        </ul>
                                    </div>
                                </div>

                                
                            </div>
                    </div>



    

            </div>
      
    </div>
  )
}

export default Ecommerce
