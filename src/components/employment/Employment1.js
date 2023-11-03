import React from 'react'
import './Employment1.css'
import EmploymentIMG1 from '../../assets/employement1.png'

import { AiOutlineCheck } from 'react-icons/ai';

const Employment1 = () => {
  return (
    <>
      <div className='employment1'>
        <div className='employment1-content'>

{/* FLEX ITEMS */}

            <div className='employment1-flex container'>
                <div className='employment1-icon'>
                    <img src={ EmploymentIMG1 } alt="Employment Program" loading="lazy"/>
                </div>

                <div className='employment1-caption'>
                    <div>
                        <h1>Employment Assistance</h1>
                        <p>Hear from our professionals to help you secure employment with major corporations, felon-friendly companiesk, and small businesses.</p>
                        <ul>
                            <li>
                                <p> <span><AiOutlineCheck /> </span>Get hired quickly.</p>
                            </li>
                            <li>
                                <p><span><AiOutlineCheck /> </span>Assitance in gathering employment documents.</p>
                            </li>
                            <li>
                                <p><span><AiOutlineCheck /> </span>Resume insights and job trainings.</p>
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

export default Employment1
