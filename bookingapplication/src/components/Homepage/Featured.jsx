import React from "react";
import "./home.css";
import ListingCard from "../common/listing_card";
import image1 from "../../static/images/1.png"
import image2 from "../../static/images/2.png"
import image3 from "../../static/images/3.png"
import image4 from "../../static/images/5.png"


const listingsArray = [
  {
    address:"Kathmandu, Nepal",
    cost:10000,
    image:image1
  },
  {
    address:"Pokhara, Nepal",
    cost:20000,
    image:image2
  },
  {
    address:"Chitwan, Nepal",
    cost:5000,
    image:image3
  },
  {
    address:"Bhaktapur, Nepal",
    cost:55000,
    image:image4
  },
]

const Featured = () => {
  return (
    <section id="featured" className="container me-auto ms-auto">
      <h2 id="fea-text">Featured Accomodation</h2>

      <div
        className="d-flex justify-content-between mt-4  m-auto"
        style={{ flexWrap: "wrap" }}>
        <ListingCard listing={listingsArray[0]} />
        <ListingCard listing={listingsArray[1]}/>
        <ListingCard listing={listingsArray[2]}/>
        <ListingCard listing={listingsArray[3]}/>
      </div>
    </section>
  );
};

export default Featured;
