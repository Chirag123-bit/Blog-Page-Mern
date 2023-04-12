import React from 'react'

import "./card.css"
import { Link } from 'react-router-dom'

const ListingCard = ({listing}) => {

  return (
    <div className="listing_card">
        <div className="image-container">
            <img src={listing.image} alt="asdsa" />
        </div>
        <h2 id="listing-country">{listing.address}</h2>
        <p>Rs. {listing.cost}</p>

        <div className="button-container text-center">
          
          <Link to="/accom">
          <button className='btn btn-warning'>View Details</button>
          </Link>
        </div>
    </div>
  )
}

export default ListingCard