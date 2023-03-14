import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import Loader from "../components/Loader";
import { login } from "../actions/userActions";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const { redirect } = queryString.parse(location.search);
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    if (error) {
      toast.error(error);
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo) {
      toast.success("Login Successful");
      navigate("/");
    }
  }, [userInfo, redirect, navigate]);

  return (
    <div className="login-form">
      <h1>Sign In</h1>

      {loading && <Loader />}
      <form onSubmit={submitHandler}>
        <div className="inputbox">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>Email</span>
        </div>
        <div className="inputbox">
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Password</span>
        </div>
        <button type="submit">
          Sign In
          <div className="arrow-wrapper">
            <div className="arrow"></div>
          </div>
        </button>
      </form>

      <p>
        Don't have an account?{" "}
        <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LoginScreen;
