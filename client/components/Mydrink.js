import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteMyDrink } from "../store";
import {
    PencilFill,
    Trash3Fill,
    EmojiFrown,
    EmojiSunglasses,
    ArrowRightSquareFill
  } from "react-bootstrap-icons";

class MyDrink extends Component {
  render() {
    const drink = this.props.location.state;
    const { deleteMyDrink } = this.props;

    return (
      <div
        id="drink-page"
        style={{
          display: "flex",
        //   width: "100%",
          justifyContent: "center",
        }}
      >
        <div
          id="drink-info-container"
          style={{ height: "400px", paddingTop: "2rem" }}
        >
          <img
            style={{
              borderRadius: "20px",
              width: "80%",
              height: "100%",
              backgroundColor: "#6e6b66",
              padding: "1rem"
            }}
            src={
              drink.imageURL
                ? drink.imageURL
                : "https://www.plslwd.org/wp-content/plugins/lightbox/images/No-image-found.jpg"
            }
          ></img>
        </div>
        <div
          id="drink-info"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: '350px',
          }}
        >
          <div>
            <h1>{drink.drinkName}</h1>
          </div>
          <div
            style={{
              height: "330px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2 style={{ textAlign: "center" }}>Ingredients</h2>
            <p>
              {drink.ingredient1 ? drink.ingredient1 : null}{" "}
              {drink.measure1 ? ` | ${drink.measure1}` : null}
            </p>
            <p>
              {drink.ingredient2 ? drink.ingredient2 : null}{" "}
              {drink.measure2 ? ` | ${drink.measure2}` : null}
            </p>
            <p>
              {drink.ingredient3 ? drink.ingredient3 : null}{" "}
              {drink.measure3 ? ` | ${drink.measure3}` : null}
            </p>
            <p>
              {drink.ingredient4 ? drink.ingredient4 : null}{" "}
              {drink.measure4 ? ` | ${drink.measure4}` : null}
            </p>
            <p>
              {drink.ingredient5 ? drink.ingredient5 : null}{" "}
              {drink.measure5 ? ` | ${drink.measure5}` : null}
            </p>
            <p>
              {drink.ingredient6 ? drink.ingredient6 : null}{" "}
              {drink.measure6 ? ` | ${drink.measure6}` : null}
            </p>
            <p>
              {drink.ingredient7 ? drink.ingredient7 : null}{" "}
              {drink.measure7 ? ` | ${drink.measure7}` : null}
            </p>
            <p>
              {drink.ingredient8 ? drink.ingredient8 : null}{" "}
              {drink.measure8 ? ` | ${drink.measure8}` : null}
            </p>
            <p>
              {drink.ingredient9 ? drink.ingredient9 : null}{" "}
              {drink.measure9 ? ` | ${drink.measure9}` : null}
            </p>
            <p>
              {drink.ingredient10 ? drink.ingredient10 : null}{" "}
              {drink.measure10 ? ` | ${drink.measure10}` : null}
            </p>
            <p>
              {drink.ingredient11 ? drink.ingredient11 : null}{" "}
              {drink.measure11 ? ` | ${drink.measure11}` : null}
            </p>
            <p>
              {drink.ingredient12 ? drink.ingredient12 : null}{" "}
              {drink.measure12 ? ` | ${drink.measure12}` : null}
            </p>
            <p>
              {drink.ingredient13 ? drink.ingredient13 : null}{" "}
              {drink.measure13 ? ` | ${drink.measure13}` : null}
            </p>
            <p>
              {drink.ingredient14 ? drink.ingredient14 : null}{" "}
              {drink.measure14 ? ` | ${drink.measure14}` : null}
            </p>
            <p>
              {drink.ingredient15 ? drink.ingredient15 : null}{" "}
              {drink.measure15 ? ` | ${drink.measure15}` : null}
            </p>
          </div>
          <div
            style={{
              height: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2>Instructions</h2>
            <p>{drink.directions}</p>
          </div>
          <div
            style={{
              height: "50px",
              width: "150px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Link to={{ pathname: "/editMyDrink", state: drink }}>
              <PencilFill size={25} />
            </Link>
            <Link to="/myDrinks" onClick={() => deleteMyDrink(drink)}>
              <Trash3Fill size={25} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      deleteMyDrink: (drink) => dispatch(deleteMyDrink(drink)),
    };
  };

export default connect(null, mapDispatchToProps)(MyDrink);
