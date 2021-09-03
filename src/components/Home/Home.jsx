import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-action";
import { addToWishList } from "../../redux/Shopping/shopping-action";
import "./home.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 430,
  },
  media: {
    height: 240,
  },
});

function Home({ addToCart, addToWishList }) {
  const classes = useStyles();
  const history = useHistory();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div>
      <h1>Welcome</h1>
      <h2>We are glad to see you in our store</h2>
      <img src={"./logo.png"} alt="" srcset="" />
      <div>
        <h3>LATEST PRODUCTS</h3>
      </div>
      <div className="cards ">
        {products.map((product) => {
          return (
            <div key={product.id} className="card">
              <div className={classes.root}>
                <CardActionArea
                  onClick={() => history.push(`/product/${product.id}`)}
                >
                  <CardMedia
                    component="img"
                    className={classes.media}
                    className="img"
                    image={product.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h3">
                      {product.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="h2"
                    >
                      {product.category}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      ${product.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className="buttonDiv">
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
                </CardActions>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    addToWishList: (product) => dispatch(addToWishList(product)),
  };
};

export default connect(null, mapDispatchToProps)(Home);
