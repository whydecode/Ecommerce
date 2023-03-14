import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { listProductDetails, updateProduct } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import { toast } from "react-hot-toast";
import { PRODUCT_UPDATE_RESET } from "../constants/productConstants";

const ProductEditScreen = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;
  const navigate = useNavigate();

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: id,
        name,
        price,
        image,
        brand,
        category,
        description,
        countInStock,
      })
    );
  };

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      navigate("/admin/productlist");
    } else {
      if (!product.name || product._id !== id) {
        dispatch(listProductDetails(id));
      } else {
        setName(product.name);
        setPrice(product.price);
        if (!image) {
          setImage(product.image);
        }

        setBrand(product.brand);
        setCategory(product.category);
        setCountInStock(product.countInStock);
        setDescription(product.description);
      }
    }
    if (errorUpdate) {
      toast.error(errorUpdate);
    }
    if (error) {
      toast.error(error);
    }
  }, [
    image,
    error,
    product,
    id,
    dispatch,
    successUpdate,
    navigate,
    errorUpdate,
  ]);

  return (
    <>
      <Link to="/admin/productlist" className="btn btn-light my-3">
        Go Back
      </Link>{" "}
      <div className="login-form">
        <h1>Edit Product</h1>
        {loadingUpdate && <Loader />}
        {loading ? (
          <Loader />
        ) : (
          <form onSubmit={submitHandler}>
            <div className="inputbox">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span>Name</span>
            </div>
            <div className="inputbox">
              <input
                type="number"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <span>Price</span>
            </div>

            <div className="inputbox">
              <input
                type="file"
                id="image-file"
                name="image"
                label="Choose Image"
                onChange={uploadFileHandler}
              />

              <span>Image</span>

              {uploading && <Loader />}
            </div>

            <div className="inputbox">
              <input
                type="text"
                required
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
              <span>Brand</span>
            </div>
            <div className="inputbox">
              <input
                type="text"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <span>Category</span>
            </div>
            <div className="inputbox">
              <input
                type="number"
                required
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              />
              <span>Count In Stock</span>
            </div>
            <div className="inputbox">
              <input
                type="text"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <span>Description</span>
            </div>

            <button type="submit">
              Update
              <div className="arrow-wrapper">
                <div className="arrow"></div>
              </div>
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default ProductEditScreen;
