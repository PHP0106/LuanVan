import React from "react";
import dotenv from "dotenv";
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute, AppRoute } from './utils/routeUtils';

// layouts
import UserLayout from "./layouts/user/userLayout";


// pages
import Homepage from "./views/pages/home/home";
import ProductDetailPage from "./views/pages/product/product";
import CartPage from "./views/pages/cart/cart";
import ContactPage from "./views/pages/contact-us/contactUs";
import CheckoutPage from "./views/pages/checkout/checkout";
import ProfilePage from "./views/pages/profile/profile";

import SigninPage from "./views/signin/signin";
import SignupPage from "./views/signup/signup";


dotenv.config()


function App() {
  return (
    <Router>
      <Switch>
        <AppRoute path="/" exact layout={UserLayout} component={Homepage} />

        <AppRoute path="/product/:id" layout={UserLayout} component={ProductDetailPage} />
        <AppRoute path="/cart" layout={UserLayout} component={CartPage} />
        <AppRoute path="/contact" layout={UserLayout} component={ContactPage} />
        <AppRoute path="/checkout" layout={UserLayout} component={CheckoutPage} />
        <AppRoute path="/profile" layout={UserLayout} component={ProfilePage} />

        <AppRoute path="/log-in" layout={UserLayout} component={SigninPage} />
        <AppRoute path="/register" layout={UserLayout} component={SignupPage} />
        <AppRoute path="/" layout={UserLayout} component={SignupPage} />
      </Switch>
    </Router>
  );
}

export default App;
