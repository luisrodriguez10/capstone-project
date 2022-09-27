import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteMyDrink, fetchMyDrinks } from "../store";
import { Link } from "react-router-dom";
import './Mydrinks.css';

import {
  PencilFill,
  Trash3Fill,
  EmojiFrown,
  EmojiSunglasses,
  ArrowRightSquareFill
} from "react-bootstrap-icons";
import SearchBarMyDrinks from "./SearchBarMyDrinks";

class Mydrinks extends Component {

  componentDidMount() {
    this.props.fetchMyDrinks(this.props.auth);
  }

  render() {
    const { myDrinks, deleteMyDrink } = this.props;

    return (
      <div className="my-drinks-page">
      <div
        id="my-drinks-page"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 className="drinkstitle">MY DRINKS</h2>
        { myDrinks.length > 0 ? <div className="my-4">
          <SearchBarMyDrinks myDrinks={myDrinks}/>

          </div> : null}  
        <br></br>
{/* <hr className="topdrinkshr"></hr> */}
        <div id="my-drinks">
          { myDrinks.length > 0 ? myDrinks.map((drink) => {
            return (
              <div key={drink.id} className="drink-info">
                 
                <div >
                  <img className="drinkimg"
                    src={
                      drink.strDrinkThumb
                        ? drink.strDrinkThumb
                        : "https://www.plslwd.org/wp-content/plugins/lightbox/images/No-image-found.jpg"
                    }
                  ></img>
                </div>
                <div>
                  <Link to={{ pathname: `/myDrinks/${drink.id}` }}><h2 className="nameofdrink">{drink.strDrink}             {drink.strAlcoholic2 ? (
                    <EmojiSunglasses size={15} />
                  ) : (
                    <EmojiFrown size={15} />
                  )}</h2></Link>
                   
      
                
                </div>
               
                <hr className="drinknamehr"></hr>
                
           
               <div className="bothbuttons">
                 
              
                  <div className="bottom">
                  <button className="recipebutton"><Link to={{ pathname: `/myDrinks/${drink.id}` }}>
                    RECIPE
                  </Link></button>
                  </div>
                  

                  <div className="bottom1">
                  <button className="removebutton"><Link to="/myDrinks" onClick={() => deleteMyDrink(drink)}>
                    REMOVE
                  </Link></button>
                  </div>

                  <Link to={{ pathname: `/myDrinks/${drink.id}` }}>
                  </Link>
                  <Link to="/myDrinks" onClick={() => deleteMyDrink(drink)}>
                  </Link>
                  
                </div>
             
             </div>
            );
          }) : <p>No drinks saved.</p>}
        </div>
                  </div>
                  </div>
                 

    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    myDrinks: state.myDrinks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMyDrinks: (user) => dispatch(fetchMyDrinks(user)),
    deleteMyDrink: (drink) => dispatch(deleteMyDrink(drink)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mydrinks);
