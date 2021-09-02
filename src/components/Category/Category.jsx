import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { addToCart } from "../.././redux/Shopping/shopping-action";
import { addToWishList } from "../.././redux/Shopping/shopping-action";
import "./category.css";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 240,
  },
});

function Category({ addToCart, addToWishList }) {
  const routerLocation = useLocation();
  const categoryName = routerLocation.pathname.split("/")[2];
  const [products, setProducts] = useState([]);
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div>
      <h1> All products from {categoryName} category</h1>

      <div className="cards">
        {products.map((product) => {
          return (
            <div key={product.id} className="card">
              <Card className={classes.root}>
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
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="h2"
                    >
                      {product.category}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
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
              </Card>
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

export default connect(null, mapDispatchToProps)(Category);
