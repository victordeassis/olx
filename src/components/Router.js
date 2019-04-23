import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MobileStoreHome from "./MobileStoreHome";
import App from "../App";
import NotFound from "./NotFound";
import ListingDetails from "../components/ListingDetails";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MobileStoreHome} />
      <Route path="/listings/:page" component={App} />
      <Route path="/listing/:id" component={ListingDetails} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
