import React from "react";
import { connect } from "react-redux";
import { removeFromWishList } from "../../redux/Shopping/shopping-action";

function WishList({ wishList, removeFromWishList }) {
  return (
    <div>
      <h1>Wish list</h1>
      <div>
        {wishList.map((product) => {
          return (
            <div>
              <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src={product.image} class="card-img cartImg" />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h2 class="card-title">{product.title}</h2>
                      <p class="card-text">
                        <small class="text-muted">${product.price}</small>
                      </p>
                      <button
                        className="deleteItemBtn"
                        onClick={() => removeFromWishList(product.id)}
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
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    wishList: state.shop.wishList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromWishList: (id) => dispatch(removeFromWishList(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WishList);
