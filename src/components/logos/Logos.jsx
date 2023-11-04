import React from 'react'
import './Logos.css'


import { BsWordpress } from 'react-icons/bs';
import { SiWix } from 'react-icons/si';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { DiCss3Full } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { SiNamecheap } from 'react-icons/si';
import { FaShopify } from 'react-icons/fa';
import { AiOutlineGoogle } from 'react-icons/ai';
import { FaNodeJs } from 'react-icons/fa';


const Logos = () => {
  return (
    <>

        <div className='logos'>
            <div className='logos-content'>

                <div className='logos-flex'>

                    <div className='logos-flexItem'>
                        <h1><FaReact /></h1>
                    </div>

                    <div className='logos-flexItem'>
                        <h1><FaNodeJs /></h1>
                    </div>

                    <div className='logos-flexItem'>
                        <h1><AiOutlineHtml5 /></h1>
                    </div>

                    <div className='logos-flexItem'>
                        <h1><BsWordpress /></h1>
                    </div>

                    <div className='logos-flexItem'>
                        <h1><SiWix /></h1>
                    </div>

                    <div className='logos-flexItem'>
                        <h1><DiCss3Full /></h1>
                    </div>

                    <div className='logos-flexItem'>
                        <h1><SiNamecheap /></h1>
                    </div>

                    <div className='logos-flexItem'>
                        <h1><FaShopify /></h1>
                    </div>

                    <div className='logos-flexItem'>
                        <h1><AiOutlineGoogle /></h1>
                    </div>


                </div>

            </div>

        </div>

    </>
  )
}

export default Logos
