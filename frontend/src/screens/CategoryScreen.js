import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProductsCategory } from "../actions/productActions";
import { useParams } from "react-router-dom";
import Paginate from "../components/Paginate";
import Meta from "../components/Meta";
import CategoryList from "../components/CategoryList";
const CategoryScreen = () => {
  const { keyword, pageNumber, category } = useParams();

  const dispatch = useDispatch();
  const productListCategory = useSelector((state) => state.productListCategory);
  const { loading, error, products, page, pages } = productListCategory;

  useEffect(() => {
    dispatch(listProductsCategory(keyword, pageNumber, category));
  }, [dispatch, keyword, pageNumber, category]);

  return (
    <>
      <Meta />
      <CategoryList />
      <h1>{category}</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message varient="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default CategoryScreen;
