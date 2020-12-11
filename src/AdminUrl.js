import React from "react";
import { Route } from "react-router-dom";
import AdminPage from "./component/AdminPage";

function AdminUrl() {
  return (
    <>
      <Route exact path="/admin" component={AdminPage} />
    </>
  );
}

export default AdminUrl;
