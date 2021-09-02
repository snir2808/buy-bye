import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-action";
import { addToWishList } from "../../redux/Shopping/shopping-action";

function Product({ addToCart, addToWishList }) {
  const [product, setProduct] = useState();
  const routerLocation = useLocation();
  const productId = routerLocation.pathname.split("/")[2];

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProduct(json);
      });
  }, []);

  return (
    <div>
      {product ? (
        <div className="card mb-3" styles={{ maxWidth: "540px" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={product.image} className="card-img" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title ">{product.title}</h3>
                <p className="card-text productDescription">
                  {product.description}
                </p>
                <h4 className="card-text">Price: ${product.price}</h4>
              </div>
              <Button
                onClick={() => addToCart(product)}
                size="small"
                variant="contained"
                color="primary"
              >
                ADD TO CART 🛒
              </Button>
              <Button
                onClick={() => addToWishList(product)}
                size="small"
                variant="contained"
                color="secondary"
              >
                Add to wish list ❤️
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    addToWishList: (product) => dispatch(addToWishList(product)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
