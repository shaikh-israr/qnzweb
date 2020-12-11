import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./component/loginsignup/Login";
import ProductList from "./component/ProductList";
import BookCart from "./component/BookCart";
import Buypage from "./component/Buypage";
import AdminPage from "./component/Admin/AdminPage";
import Dashboard from "./component/Admin/Dashboard";
import Sell from "./component/Admin/Sell";
import Upload from "./component/Admin/Upload";
import LandingPage from "./component/LandingPage";
import SignUp from "./component/loginsignup/SignUp";
import Checkout from "./component/Checkout";

function UrlRoute({ location }) {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/product" component={ProductList} />
        <Route exact path="/cart" component={BookCart} />
        <Route exact path="/buy" component={Buypage} />
        <Route exact path="/admin" component={AdminPage} />
        <Route exact path="/admin/dashbord" component={Dashboard} />
        <Route exact path="/admin/sell" component={Sell} />
        <Route exact path="/admin/upload" component={Upload} />
        <Route exact path="/payment" component={Checkout} />
      </Switch>
    </>
  );
}

export default UrlRoute;
