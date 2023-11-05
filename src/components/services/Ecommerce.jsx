import React from 'react'
import './Ecommerce.css'
import EmploymentIMG1 from '../../assets/housing1.png'

import { AiOutlineCheck } from 'react-icons/ai';

const Ecommerce = () => {
  return (
    <>
      <div className='ecommerce'>
        <div className='ecommerce-content'>

{/* FLEX ITEMS */}

            <div className='ecommerce-flex container'>
                <div className='ecommerce-icon'>
                    <img src={ EmploymentIMG1 } alt="Employment Program" loading="lazy"/>
                </div>

                <div className='ecommerce-caption'>
                    <div>
                        <h1>Better Transitional Housing</h1>
                        <p>Make yourself at home. Stay as long as you need. We provide all the basics while you rebuild your life.</p>
                        <ul>
                            <li>
                                <p> <span><AiOutlineCheck /> </span>Food and basic necessitites included.</p>
                            </li>
                            <li>
                                <p><span><AiOutlineCheck /> </span>Pay rent only after you get paid.</p>
                            </li>
                            <li>
                                <p><span><AiOutlineCheck /> </span>Transportation provided to & from work.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            
        </div>
      </div>
    </>
  )
}

export default Ecommerce
