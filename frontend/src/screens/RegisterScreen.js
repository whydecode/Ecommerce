import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import Loader from "../components/Loader";
import { register } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import { toast } from "react-hot-toast";
const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const location = useLocation();
  const { redirect } = queryString.parse(location.search);
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
      if (error) {
        toast.error(error);
      }
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo) {
      navigate("/");
      toast.success("Registration Successful");
    }
  }, [userInfo, redirect, navigate]);

  return (
    <div className="login-form">
      <h1>Sign Up</h1>

      {loading && <Loader />}
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
        <div className="inputbox">
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span>Confirm Password</span>
        </div>
        <button type="submit">
          Sign Up
          <div className="arrow-wrapper">
            <div className="arrow"></div>
          </div>
        </button>
      </form>

      <p>
        Already have an account?{" "}
        <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterScreen;
