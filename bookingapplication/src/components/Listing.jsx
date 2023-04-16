import React from 'react'
import "./register.css"


import image1 from "../static/images/1.png"
import image2 from "../static/images/2.png"
import image3 from "../static/images/3.png"
import image4 from "../static/images/5.png"
import ListingCard from './common/listing_card'


const listingsArray = [
    {
        address: "Kathmandu, Nepal",
        cost: 10000,
        image: image1
    },
    {
        address: "Pokhara, Nepal",
        cost: 20000,
        image: image2
    },
    {
        address: "Chitwan, Nepal",
        cost: 5000,
        image: image3
    },
    {
        address: "Bhaktapur, Nepal",
        cost: 55000,
        image: image4
    },
]

const Listing = () => {
    return (
        <section className='mt-5'>
            <div className="search-container">
                <input type="text" placeholder='Enter A Listing To Search' />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>

            <div
                className="d-flex justify-content-between mt-4  m-auto container"
                style={{ flexWrap: "wrap" }}>
                <ListingCard listing={listingsArray[0]} />
                <ListingCard listing={listingsArray[1]} />
                <ListingCard listing={listingsArray[2]} />
                <ListingCard listing={listingsArray[3]} />
                <ListingCard listing={listingsArray[0]} />
                <ListingCard listing={listingsArray[1]} />
                <ListingCard listing={listingsArray[2]} />
                <ListingCard listing={listingsArray[3]} />
                <ListingCard listing={listingsArray[0]} />
                <ListingCard listing={listingsArray[1]} />
                <ListingCard listing={listingsArray[2]} />
                <ListingCard listing={listingsArray[3]} />
                <ListingCard listing={listingsArray[0]} />
                <ListingCard listing={listingsArray[1]} />
                <ListingCard listing={listingsArray[2]} />
                <ListingCard listing={listingsArray[3]} />
            </div>

        </section>
    )
}

export default Listing