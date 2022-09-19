import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import Landingpage from './Landingpage';
import './Navbar.css';


const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <h1 className='firstrow'>The Cocktelero</h1>
    <hr />

    <nav>
      {isLoggedIn ? (
        <div className='secondrowlogin'>
          {/* The navbar will show these links after you log in */}
          <div className='drink'> <Link to="/home">Home</Link></div>
          <div className='drink'><Link to="/api/myDrinks">My Drinks</Link></div>
          <div className='drink'><Link to="/Mypantry">My Pantry</Link></div>
          <div className='drink'><Link to="/Recipes">Recipes</Link></div>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (

        <div className='secondrow'>

          {/* The navbar will show these links before you log in */}
          <div className='drink'> <Link to="/">Home</Link></div>
          <div className='drink'><Link to="/Recipes">Recipes</Link></div>
          <div className='drink'><Link to="/login">Login</Link></div>
          <div className='drink'><Link to="/signup">Sign Up</Link></div>
          
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
  
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)
