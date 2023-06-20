import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Carousel, Image } from "react-bootstrap";
import Loader from "./Loader";
import { listTopProducts } from "../actions/productActions";
import { toast } from "react-hot-toast";

const ProductCarousel = () => {
  const dispatch = useDispatch();
  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    dispatch(listTopProducts());
  }, [dispatch, error]);

  return loading ? (
    <Loader />
  ) : (
    <Carousel
      nextLabel=""
      prevLabel=""
      interval="3000"
      variant="dark"
      indicators={false}
      pause="hover"
      className="bg-dark"
    >
      {products.map((product) => (
        <Carousel.Item key={product._id} >
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid/>
            <Carousel.Caption className="carousel-caption">
              <h3>
                {product.name} (&#x20b9;{product.price})
              </h3>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
