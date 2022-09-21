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
        <div className="my-4">
          <SearchBarMyDrinks myDrinks={myDrinks}/>

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
                      drink.imageURL
                        ? drink.imageURL
                        : "https://www.plslwd.org/wp-content/plugins/lightbox/images/No-image-found.jpg"
                    }
                  ></img>
                </div>

                <div>
                <hr className="hr-mydrinks"/>

                  <Link to={{ pathname: `/myDrink/${drink.id}`, state: drink }}><h2 className="drinkname">{drink.drinkName}</h2></Link>
                  <hr className="hr-mydrinks"/>

                </div>

                <div>
                  {drink.alcoholic ? (
                    <EmojiSunglasses size={30} />
                  ) : (
                    <EmojiFrown size={30} />
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
                  {/* <Link to={{ pathname: `/myDrinks/${drink.id}`, state: drink }}>
                    <ArrowRightSquareFill size={25} />
                  </Link> */}
<div>
                  <button className="recipebutton"><Link to={{ pathname: `/myDrinks/${drink.id}` }}>
                    {/* <ArrowRightSquareFill size={25} /> */}
                    Recipe
                  </Link></button>
                  </div>
               

                  <div className="bottom1">
                  <button className="removebutton"><Link to="/myDrinks" onClick={() => deleteMyDrink(drink)}>
                    {/* <Trash3Fill size={25} /> */}
                    Remove
                  </Link></button>
                  </div>
                  </div>
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
