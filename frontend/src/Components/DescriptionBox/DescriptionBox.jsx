import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
         <div className="descriptionbox-navigator">
         <div className="descriptionbox-nav-box">Description</div>
         <div className="descriptionbox-fade">Reviews(122)</div>

         </div>
         <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitate buying and selling of products or services over the 
                internet sevice as a virtual marketplace where businesses showcase their products , interact with customers and 
                conduct transactions without the need for a physical presence. E-commercw websites have gained immense popularity 
                due to their accessibility and the global reach they offer. 
            </p>
            <p>E-commerce websites typically display products or services along with detailed descriptions, images,prices and any available variations (e.g sizes, colors.).each product 
                usually has its own dedicated page with relevent information.
            </p>
         </div>
    </div>
  )
}

export default DescriptionBox