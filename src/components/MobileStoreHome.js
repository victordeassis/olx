import React, { Component } from "react";

class MobileStoreHome extends Component {
  goToListings = () => {
    this.props.history.push("listings/1");
  };

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1">Welcome to the Mobile Store!</h1>
          <p className="subtitle">
            The <strong>best place</strong> to buy your new Phone!
          </p>
          <button
            className="button is-primary is-medium"
            onClick={this.goToListings}
          >
            See all the listings
          </button>
        </div>
      </section>
    );
  }
}

export default MobileStoreHome;
