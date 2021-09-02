import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { auth } from "./firebase/utils";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Product from "./components/Product/Product";
import Category from "./components/Category/Category";
import Cart from "./components/Cart/Cart";
import WishList from "./components/WishList/WishList";
import Login from "./components/Login/Login";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <div className="App">
      <Router>
        {currentUser ? (
          <>
            <Nav />
            <Switch>
              <Route
                exact
                path="/"
                component={() => {
                  return <Home />;
                }}
              />
              <Route
                path="/product/"
                component={() => {
                  return <Product />;
                }}
              />
              <Route
                path="/category/"
                component={() => {
                  return <Category />;
                }}
              />
              <Route
                path="/cart"
                component={() => {
                  return <Cart />;
                }}
              />
              <Route
                path="/wishlist"
                component={() => {
                  return <WishList />;
                }}
              />
            </Switch>
          </>
        ) : (
          <Redirect to="/login" />
        )}
        <Route
          path="/login"
          component={() => {
            return <Login currentUser={currentUser} />;
          }}
        />
      </Router>
    </div>
  );
}

export default App;
