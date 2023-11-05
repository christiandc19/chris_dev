import React from 'react'
import './Ecommerce.css'
import EmploymentIMG1 from '../../assets/housing1.png'

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
                        <h1>Work in progress...</h1>
                    </div>
                </div>
            </div>

            
        </div>
      </div>
    </>
  )
}

export default Ecommerce
