import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/utils";
import "./nav.css";
function Nav({ cart, wishList, props }) {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    setCartCount(count);
    setWishlistCount(wishList.length);
  }, [cart, wishList]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
          <img className="logoImg" src={"./logo.png"} alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category/electronics">
                  Electronics
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  to="/category/men's clothing"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Men's clothing
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  to="/category/women's clothing"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Women's clothing
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  to="/category/jewelery"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Jewelery
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  to="/cart"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Cart ({cartCount})
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  to="/wishlist"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Wish-list ({wishlistCount})
                </Link>
              </li>
              <li
                className="nav-item nav-link"
                tabindex="-1"
                aria-disabled="true"
                onClick={() => {
                  auth.signOut();
                }}
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    wishList: state.shop.wishList,
  };
};

export default connect(mapStateToProps)(Nav);
