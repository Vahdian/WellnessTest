import React from "react";
import { Switch, Route } from "react-router";
import landingPage from "../../pages/landingPage";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <landingPage></landingPage>
        </Route>
      </Switch>
    </div>
  );
}
