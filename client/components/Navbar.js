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
            <Link to="/"><div className="navbarblack">Home</div></Link>
          </div>
          <div className="drink">
            <Link to="/myDrinks"><div className="navbarblack">Drinks</div></Link>
          </div>
          <div className="drink">
            <Link to="/Mypantry"><div className="navbarblack">Pantry</div></Link>
          </div>
          <div className="drink">
            <Link to="/Recipes"><div className="navbarblack">Recipes</div></Link>
          </div>
          <div className="drink">
            <Link to="/stores"><div className="navbarblack">Nearby Stores</div></Link>
          </div>
          <div className="drink">



            <Link to="/profile"><div className="navbarblack">Profile</div></Link>
          </div>

          <Link to="/" onClick={handleClick}>
          <div className="navbarblack">Logout</div> 
          </Link>
        </div>


      ) : (
        <div className="secondrow">
          {/* The navbar will show these links before you log in */}
          <div className="drink">
            {" "}
            <Link to="/"><div className="navbarblack">Home</div></Link>
          </div>
          <div className="drink">
            <Link to="/Recipes"><div className="navbarblack">Recipes</div></Link>
          </div>
          <div className="drink">
            <Link to="/login"><div className="navbarblack">Login</div></Link>
          </div>
          <div className="drink">
            <Link to="/signup"><div className="navbarblack">Sign Up</div></Link>
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