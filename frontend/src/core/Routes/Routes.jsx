import React from "react";
import { Switch, Route } from "react-router";
import BillPageDetail from "../../pages/BillsPage/BillPageDetail/BillPageDetail";
import BillsPage from "../../pages/BillsPage/BillsPage";
import LandingPage from "../../pages/LandingPage/LandingPage";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/facturas/:id">
          <BillPageDetail></BillPageDetail>
        </Route>
        <Route path="/facturas">
          <BillsPage></BillsPage>
        </Route>
        <Route path="/">
          <LandingPage></LandingPage>
        </Route>
      </Switch>
    </div>
  );
}
