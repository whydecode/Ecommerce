import React, { useState } from "react";
import "./Login.css";
import {useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const [number, setNumber] = useState(shippingAddress.number)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country, number }));
    navigate("/payment");
  };

  return (
    <div className="login-form">
      <CheckoutSteps step1 step2/>
      <h1>Shipping</h1>
      <form onSubmit={submitHandler}>
        <div className="inputbox">
          <input
            type="address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <span>Address</span>
        </div>
        <div className="inputbox">
          <input
            type="tel"
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <span>Number</span>
        </div>

        <div className="inputbox">
          <input
            type="text"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <span>City</span>
        </div>

        <div className="inputbox">
          <input
            type="text"
            required
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
          <span>Postal Code</span>
        </div>

        <div className="inputbox">
          <input
            type="text"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <span>Country</span>
        </div>
        <button type="submit">
          Continue
          <div className="arrow-wrapper">
            <div className="arrow"></div>
          </div>
        </button>
      </form>

    </div>
  );
};

export default ShippingScreen;
