import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout, removeItems } from "../store";
import Landingpage from "./Landingpage";
import "./Navbar.css";

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <h1 className="firstrow">The Cocktelero</h1>
    <hr />

    <nav>
      {isLoggedIn ? (
        <div className="secondrowlogin">
          {/* The navbar will show these links after you log in */}
          <div className="drink">
            {" "}
            <Link to="/">HOME</Link>
          </div>
          <div className="drink">
            <Link to="/myDrinks">MY DRINKS</Link>
          </div>
          <div className="drink">
            <Link to="/Mypantry">MY PANTRY</Link>
          </div>
          <div className="drink">
            <Link to="/Recipes">RECIPES</Link>
          </div>
          <div className="drink">
            <Link to="/stores">NEARBY STORES</Link>
          </div>
          <div className="drink">



            <Link to="/profile">My Profile</Link>
          </div>

          <Link to="/" onClick={handleClick}>
            LOGOUT
          </Link>
        </div>
  

      ) : (
        <div className="secondrow">
          {/* The navbar will show these links before you log in */}
          <div className="drink">
            {" "}
            <Link to="/">Home</Link>
          </div>
          <div className="drink">
            <Link to="/Recipes">Recipes</Link>
          </div>
          <div className="drink">
            <Link to="/login">Login</Link>
          </div>
          <div className="drink">
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
    <hr />
    {/* <div className='footer'>
    <hr className='footerhr' />

    <a href="#"><i class="fa fa-facebook"></i></a>
    <a href="#"><i class="fa fa-twitter"></i></a>
    <a href="#"><i class="fa fa-instagram"></i></a>

    </div> */}
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
      dispatch(removeItems());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
