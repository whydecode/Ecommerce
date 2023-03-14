import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBox.css";
const SearchBox = () => {
  
  const [keyboard, setKeyboard] = useState("");
  const navigate = useNavigate();
//   const location = useLocation();
//   const isHomePage = location.pathname === "/";

//   if (!isHomePage) {
//     return null;
//   }
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyboard.trim()) {
      navigate(`/search/${keyboard}`);
    } else {
      navigate(`/`);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="search">
        <input
          className="search-txt"
          placeholder="Products..."
          type="text"
          required
          value={keyboard}
          onChange={(e) => setKeyboard(e.target.value)}
        />
        <button type="submit" className="search-btn">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
