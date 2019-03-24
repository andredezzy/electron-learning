import React from "react";
import { Route } from "react-router-dom";

import Entry from "./pages/Entry";
import Home from "./pages/Home";

const Routes = () => (
    <div className="router">
        <Route exact path="/" component={Entry} />
        <Route path="/app" component={Home} />
    </div>
);

export default Routes;
