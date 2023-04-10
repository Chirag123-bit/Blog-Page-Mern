import React from "react";
import "./home.css";
import ListingCard from "../common/listing_card";

const Featured = () => {
  return (
    <section id="featured" className="container me-auto ms-auto">
      <h2 id="fea-text">Featured Accomodation</h2>

      <div
        className="d-flex justify-content-between mt-4  m-auto"
        style={{ flexWrap: "wrap" }}
      >
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
      </div>
    </section>
  );
};

export default Featured;
