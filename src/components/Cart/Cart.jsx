import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  adjustQty,
  removeFromCart,
} from "./../../redux/Shopping/shopping-action";
import Button from "@material-ui/core/Button";
import "./cart.css";

function Cart({ cart, adjustQty, removeFromCart }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  const onChangeHandler = (e, id) => {
    console.log(e.target.value);
    adjustQty(id, e.target.value);
  };

  return (
    <>
      <div>
        {cart.map((product) => {
          return (
            <div>
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src={product.image}
                      className="card-img cartImg"
                      alt={product.title}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 className="card-title">{product.title}</h2>
                      <p className="card-text">
                        <label htmlFor="qty">Qty</label>

                        <input
                          min="1"
                          type="number"
                          className="qty"
                          name="qty"
                          value={product.qty}
                          onChange={(e) => {
                            onChangeHandler(e, product.id);
                          }}
                        />
                      </p>
                      <p className="card-text">
                        <small className="text-muted">${product.price}</small>
                      </p>
                      <button
                        className="deleteItemBtn"
                        onClick={() => removeFromCart(product.id)}
                      >
                        <img
                          src="https://image.flaticon.com/icons/svg/709/709519.svg"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h4>Cart Summary</h4>
        <span>TOTAL: ({totalItems} items)</span>
        <span>${totalPrice}</span> <br />
        <Button variant="contained" color="secondary">
          Proceed To Checkout
        </Button>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
