import React, { Component } from "react";
import "./ListingCard.css";

class ListingCard extends Component {
  componentDidMount() {
    console.log(this.props.details);
  }

  goToListing = event => {
    event.preventDefault();
    localStorage.setItem("listingDetails", JSON.stringify(this.props.details));
    this.props.history.push(`/listing/${this.props.details.id}`);
  };

  render() {
    const details = this.props.details;
    return (
      <div className="column" onClick={this.goToListing}>
        <div className="notification is-primary">
          <h4 className="title is-4 three-dots-text">{details.title}</h4>

          <span className="tag is-medium is-black">{details.params[0][1]}</span>
          {details.params[1][1] === "Używane" ? (
            <span className="tag is-medium is-white">
              {details.params[1][1]}
            </span>
          ) : (
            <span className="tag is-medium is-success">
              {details.params[1][1]}
            </span>
          )}
          <p className="location">
            <span className="icon">
              <i className="fas fa-map-marked-alt" />
            </span>
            Located in {details.city_label}
          </p>
        </div>
      </div>
    );
  }
}

export default ListingCard;
