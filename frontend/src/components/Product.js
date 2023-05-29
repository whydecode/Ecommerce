import React from "react";
import { Link } from "react-router-dom";
import "./Book.css";
import { addToCart } from "../actions/cartActions";
import Rating from "./Rating";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
const Product = ({ product }) => {
  const dispatch = useDispatch();
  const cartButton = () => {
    dispatch(addToCart(product._id, 1));
    toast.success(`${product.name} has been added to cart`);
  };
  return (
    <div className="book-card">
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt={product.name} className="productImage" />
      </Link>

      <div className="bookInfoDiv">
        <div className="bookInfo">
          <Link to={`/product/${product._id}`}>
            <p className="productName">{product.name}</p>
          </Link>
        </div>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        <span className="productPrice">&#x20b9;{product.price}</span>

        <p className="author">{product.brand}</p>
        <button
          className="addButton"
          onClick={cartButton}
          disabled={product.countInStock == 0}
        >
          {product.countInStock == 0 ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Product;
