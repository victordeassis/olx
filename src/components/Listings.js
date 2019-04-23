import React, { Component } from "react";
import ListingCard from "./ListingCard";

class Listings extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="columns">
          {this.props.listings[this.props.actualPage - 1].ads.map(data => (
            <ListingCard
              key={data.id}
              details={data}
              history={this.props.history}
            />
          ))}
        </div>
        <button className="button" onClick={this.props.showNextPage}>
          Next Page ->
        </button>
      </React.Fragment>
    );
  }
}

export default Listings;
