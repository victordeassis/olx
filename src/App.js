import React, { Component } from "react";
import "./App.css";
import Listings from "./components/Listings";
import myData from "./data/ads.json";

class App extends Component {
  state = {
    listings: myData,
    actualPage: parseInt(this.props.match.params.page)
  };

  showNextPage = () => {
    if (
      this.state.actualPage === parseInt(this.state.listings[0].total_pages)
    ) {
      alert("There is no more pages to show!");
      return;
    }
    this.props.history.push(`/listings/${this.state.actualPage + 1}`);
    this.setState({ actualPage: parseInt(this.props.match.params.page) + 1 });
  };

  componentWillReceiveProps(newProps) {
    this.setState({ actualPage: parseInt(newProps.match.params.page) });
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <h2 className="title is-2">
            <span role="img" aria-label="fire">
              🔥
            </span>
            Hottest listings!{" "}
          </h2>
          <Listings
            actualPage={this.state.actualPage}
            listings={this.state.listings}
            history={this.props.history}
            showNextPage={this.showNextPage}
          />
        </div>
      </section>
    );
  }
}

export default App;
