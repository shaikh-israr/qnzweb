import React from "react";
import UrlRoute from "./UrlRoute";
// import Navbar from "./component/NavBar";
import { withRouter } from "react-router-dom";

// import Sell from "./component/Admin/Sell";
// import Upload from "./component/Admin/Upload";
// import Oder from "./component/Admin/Oder";
// import ProductList from "./component/ProductList";
// import Checkout from "./component/Checkout";
function App({ location }) {
  return (
    <>
      <UrlRoute />
    </>
  );
}

export default withRouter(App);
