import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <section className="section">
    <div className="container">
      <h1 className="title is-1">Page Not found!</h1>
      <Link to="/">
        <h2 class="subtitle is-2">Go back to home</h2>
      </Link>
    </div>
  </section>
);

export default NotFound;
