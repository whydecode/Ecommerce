import React from "react";
import { Link } from "react-router-dom";
import "./CategoryList.css";
import electronics from "../images/electronics.jpeg";
import fashion from "../images/fashion.jpeg";

const CategoryList = () => {
  return (
    <>
      <div className="category">
        <Link to="/Category/Electronics">
          <div className="categoryItem">
            <img src={electronics} alt="" className="categoryImage" />
            <p>Electronics</p>
          </div>
        </Link>
        <Link to="/Category/Fashion">
          <div className="categoryItem">
            <img src={fashion} alt="" className="categoryImage" />
            <p>Fashion</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CategoryList;
