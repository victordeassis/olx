import React, { Component } from "react";
import "./ListingDetails.css";

class ListingDetails extends Component {
  listingDetails;

  constructor() {
    super();
    this.listingDetails = JSON.parse(localStorage.getItem("listingDetails"));
    console.log(this.listingDetails);
  }

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <section className="section">
        <div className="container">
          <span className="icon" onClick={this.goBack}>
            <i className="fas fa-arrow-left" />
          </span>
          <div className="listing-card">
            <h1 className="title is-1">{this.listingDetails.title}</h1>
            <p>
              <strong>Description</strong>
            </p>
            <p>{this.listingDetails.description}</p>
            <br />
            <p>
              <strong>Marka</strong>
            </p>
            <p>{this.listingDetails.params[0][1]}</p>
            <br />
            <p>
              <strong>Stan</strong>
            </p>
            <p>{this.listingDetails.params[1][1]}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default ListingDetails;
