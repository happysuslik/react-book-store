import React from 'react';
import { Route, Switch } from "react-router-dom";
import './app.css';
import {CartPage, HomePage} from "../pages";
import ShopHeader from "../shopHeader";

const App = () => {
    return (
        <main className="container">
            <ShopHeader />
            <Switch>
                <Route
                    path="/"
                    component={HomePage}
                    exact />

                <Route
                    path="/cart"
                    component={CartPage}

                />
            </Switch>
        </main>
    )
};

export default App;
