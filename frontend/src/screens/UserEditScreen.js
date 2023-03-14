import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { getUserDetails, updateUser } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import { toast } from "react-hot-toast";
import { USER_UPDATE_RESET } from "../constants/userConstansts";
const UserEditScreen = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const navigate = useNavigate();
  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser({ _id: id, name, email, isAdmin }));
  };

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      navigate("/admin/userlist");
    } else {
      if (!user.name || user._id !== id) {
        dispatch(getUserDetails(id));
      } else {
        setEmail(user.email);
        setName(user.name);
        setIsAdmin(user.isAdmin);
      }
    }
    if (error) {
      toast.error(error);
    }
    if (errorUpdate) {
      toast.error(errorUpdate);
    }
  }, [error, user, id, dispatch, successUpdate, errorUpdate, navigate]);

  return (
    <>
      <Link to="/admin/userlist" className="btn btn-light my-3">
        Go Back
      </Link>{" "}
      <div className="login-form">
        <h1>Edit User</h1>
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
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span>Email</span>
            </div>
            <div className="inputbox">
              <label htmlFor="checkbox">Is Admin</label>
              <input
                type="checkbox"
                value={isAdmin}
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              />
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

export default UserEditScreen;
