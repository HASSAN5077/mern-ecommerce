import "./App.css";
import { useEffect, useState } from "react";
import Home from "./components/Home/Home.js";
import Header from "./components/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import webfont from "webfontloader";
import React from "react";
import Footer from "./components/layout/Footer/Footer";
import ProductDetails from "./components/ProductDetails/ProductDetails.js";
import Products from "./components/Products/Products.js";
import Search from "./components/Products/Search.js";
import Login from "./components/User/Login.js";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOption from "./components/layout/Header/userOptions.js";
import { useSelector } from "react-redux";
import Profile from "./components/User/Profile.js";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import UpdateProfile from "./components/User/UpdateProfile.js";
import UpdatePassword from "./components/User/UpdatePassword.js";
import Shipping from "./components/Cart/Shipping.js";
import Cart from "./components/Cart/Cart.js";
import ConfirmOrder from "./components/Cart/ConfirmOrder";
import NewProduct from "./components/Admin/NewProduct";
import Dashboard from "./components/Admin/Dashboard";
import UsersList from "./components/Admin/UsersList";
import OrderList from "./components/Admin/OrderList";
import ProductList from "./components/Admin/ProductList";
import UpdateUser from "./components/Admin/UpdateUser";
import UpdateProduct from "./components/Admin/UpdateProduct";
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  useEffect(() => {
    webfont.load({
      google: {
        families: ["Roboto", "Chilanka", "Droid Sans"],
      },
    });
    store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOption user={user} />}
      <Route exact path="/" component={Home} />
      <Route exact path="/Product/:id" component={ProductDetails} />
      <Route exact path="/Products" component={Products} />
      <Route exact path="/Products/:keyword" component={Products} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/cart" component={Cart} />
      <ProtectedRoute exact path="/account" component={Profile} />
      <ProtectedRoute exact path="/me/update" component={UpdateProfile} />
      <ProtectedRoute
        exact
        path="/password/update"
        component={UpdatePassword}
      />
      <ProtectedRoute exact path="/shipping" component={Shipping} />
      <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />
      <ProtectedRoute exact path="/admin/product" component={NewProduct} />
      <ProtectedRoute
        isAdmin={true}
        exact
        path="/admin/dashboard"
        component={Dashboard}
      />
      <ProtectedRoute
        exact
        path="/admin/orders"
        isAdmin={true}
        component={OrderList}
      />
      <ProtectedRoute
        exact
        path="/admin/products"
        isAdmin={true}
        component={ProductList}
      />
      <ProtectedRoute
        exact
        path="/admin/users"
        isAdmin={true}
        component={UsersList}
      />
      <ProtectedRoute
          exact
          path="/admin/product/:id"
          isAdmin={true}
          component={UpdateProduct}
        />
        <ProtectedRoute
          exact
          path="/admin/user/:id"
          isAdmin={true}
          component={UpdateUser}
        />
      <Footer />
    </Router>
  );
}

export default App;
