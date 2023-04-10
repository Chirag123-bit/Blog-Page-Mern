import React from 'react'
import image1 from "../../static/images/1.png"
import "./card.css"

const ListingCard = () => {
  return (
    <div className="listing_card">
        <div className="image-container">
            <img src={image1} alt="asdsa" />
        </div>
        <h2 id="listing-country">Kathmandu, Nepal</h2>
        <p>Rs. 50000</p>

        <div className="button-container text-center">
          <button className='btn btn-warning'>View Details</button>
        </div>
    </div>
  )
}

export default ListingCard