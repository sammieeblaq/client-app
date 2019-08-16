import React from "react";
import { BrowserRouter, Route, Switch  } from "react-router-dom";

// Component
import Header from "../components/Header/Header";

// Pages
import HomePage from "../pages/HomePage";



const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ HomePage } exact />
                <Route path="/"  />
                <Route path="/"  />
                <Route path="/"  />
            </Switch>
        </div>
    </BrowserRouter>

)

export default AppRouter;