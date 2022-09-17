import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteMyDrink, fetchMyDrinks } from "../store";
import { Link } from "react-router-dom";
import {
  PencilFill,
  Trash3Fill,
  EmojiFrown,
  EmojiSunglasses,
  ArrowRightSquareFill
} from "react-bootstrap-icons";
import SearchBar from "./SearchBar";

class Mydrinks extends Component {

  componentDidMount() {
    this.props.fetchMyDrinks(this.props.auth);
  }

  render() {
    const { myDrinks, deleteMyDrink } = this.props;

    return (
      <div
        id="my-drinks-page"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>My Drinks</h2>
        <div className="my-4">
          <SearchBar myDrinks={myDrinks}/>
        </div>
        <div id="my-drinks">
          {myDrinks.map((drink) => {

            return (
              <div key={drink.id} className="drink-info">
                <div style={{ height: "300px" }}>
                  <img
                    style={{
                      borderRadius: "20px",
                      width: "100%",
                      height: "100%",
                      backgroundColor: '#6e6b66',
                      padding: '1rem'
                    }}
                    src={
                      drink.imageURL
                        ? drink.imageURL
                        : "https://www.plslwd.org/wp-content/plugins/lightbox/images/No-image-found.jpg"
                    }
                  ></img>
                </div>
                
                <div style={{ height: "70px", marginTop: "1rem" }}>
                  {/* <Link to={{ pathname: `/myDrinks/${drink.id}`, state: drink }}><h2>{drink.drinkName}</h2></Link> */}
                  <Link to={{ pathname: `/myDrinks/${drink.id}` }}><h2>{drink.drinkName}</h2></Link>
                </div>
                <div style={{ height: "70px", marginTop: "1rem" }}>
                  {drink.alcoholic ? (
                    <EmojiSunglasses size={40} />
                  ) : (
                    <EmojiFrown size={40} />
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
                  {/* <Link to={{ pathname: `/myDrinks/${drink.id}`, state: drink }}>
                    <ArrowRightSquareFill size={25} />
                  </Link> */}
                  <Link to={{ pathname: `/myDrinks/${drink.id}` }}>
                    <ArrowRightSquareFill size={25} />
                  </Link>
                  <Link to="/myDrinks" onClick={() => deleteMyDrink(drink)}>
                    <Trash3Fill size={25} />
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
