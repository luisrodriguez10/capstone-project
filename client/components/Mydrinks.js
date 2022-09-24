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
        <br></br>
      <div
        id="my-drinks-page"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 className="mydrinks">My Drinks</h2>
        <div className="my-4">
          <SearchBarMyDrinks myDrinks={myDrinks}/>
          </div>

        </div>
        <br></br>
        <br></br>

        <div id="my-drinks">
          {myDrinks.map((drink) => {

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

                <div style={{ height: "70px", marginTop: "1rem" }}>
                  <Link to={{ pathname: `/myDrinks/${drink.id}` }}><h2 className="nameofdrink">{drink.strDrink}</h2></Link>
                </div>
                <hr/>

                <div style={{ height: "70px", marginTop: "1rem", textAlign:"center" }}>
                  {drink.strAlcoholic2 ? (
                    <EmojiSunglasses size={20} />
                  ) : (
                    <EmojiFrown size={20} />
                  )}
                </div>
                <div
                  style={{
                    height: "50px",
                    width: "150px",
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div className="bottom">
                    <div>
                  <button className="recipebutton"><Link to={{ pathname: `/myDrinks/${drink.id}` }}>
                    RECIPE
                  </Link></button>
                  </div>
               

                  <div className="bottom1">
                  <button className="removebutton"><Link to="/myDrinks" onClick={() => deleteMyDrink(drink)}>
                    REMOVE
                  </Link></button>
                  </div>
                  </div>
                  <Link to={{ pathname: `/myDrinks/${drink.id}` }}>
                  </Link>
                  <Link to="/myDrinks" onClick={() => deleteMyDrink(drink)}>
                  </Link>
                </div>
              </div>
            );
          })}
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
