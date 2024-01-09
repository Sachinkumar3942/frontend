import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/sign_up");
  };
  return (
    <div className="nav-div">
      {auth ? (
        <ul className="nav-ul">
          <li>
            <img
              className="logo"
              alt="logo"
              src="https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg"
            />
          </li>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>{" "}
          </li>
          <li>
            <Link to="/add-product">Add product</Link>{" "}
          </li>
          <li>
            <Link to="/update-product/:id">Update product</Link>
          </li>

          <li>
            <Link onClick={logout} to="/">
              Logout
              ({ "User"})
            </Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li className="sig">
            <Link to="/"></Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
