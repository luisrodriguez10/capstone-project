import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Mydrinks.css"
import { deleteMyDrink, fetchMyDrinks } from "../store";
import {
    PencilFill,
    Trash3Fill
  } from "react-bootstrap-icons";

class MyDrink extends Component {

  componentDidMount(){
    this.props.fetchMyDrinks(this.props.auth);
  }

  render() {
    const { myDrink } = this.props;
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
              borderRadius: "40px",
              // border: "1px solid",
              width: "80%",
              height: "100%",
              backgroundColor: "transparent",
              padding: "1rem"
            }}
            src={
              myDrink.imageURL
                ? myDrink.imageURL
                : "https://www.plslwd.org/wp-content/plugins/lightbox/images/No-image-found.jpg"
            }
          ></img>
        </div>
        <div
          id="drink-info"
          style={{
            // display: "flex",
            // flexDirection: "column",
            alignItems: "center",
            width: '350px',

          }}
        >
          <div>
            <h2 className="drink-nameh1">{myDrink.drinkName}</h2>
            <hr className="drink-name"/>

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
            <hr className="drink-name"/>

            <p>
              {myDrink.ingredient1 ? myDrink.ingredient1 : null}{" "}
              {myDrink.measure1 ? ` | ${myDrink.measure1}` : null}
            </p>
            <p>
              {myDrink.ingredient2 ? myDrink.ingredient2 : null}{" "}
              {myDrink.measure2 ? ` | ${myDrink.measure2}` : null}
            </p>
            <p>
              {myDrink.ingredient3 ? myDrink.ingredient3 : null}{" "}
              {myDrink.measure3 ? ` | ${myDrink.measure3}` : null}
            </p>
            <p>
              {myDrink.ingredient4 ? myDrink.ingredient4 : null}{" "}
              {myDrink.measure4 ? ` | ${myDrink.measure4}` : null}
            </p>
            <p>
              {myDrink.ingredient5 ? myDrink.ingredient5 : null}{" "}
              {myDrink.measure5 ? ` | ${myDrink.measure5}` : null}
            </p>
            <p>
              {myDrink.ingredient6 ? myDrink.ingredient6 : null}{" "}
              {myDrink.measure6 ? ` | ${myDrink.measure6}` : null}
            </p>
            <p>
              {myDrink.ingredient7 ? myDrink.ingredient7 : null}{" "}
              {myDrink.measure7 ? ` | ${myDrink.measure7}` : null}
            </p>
            <p>
              {myDrink.ingredient8 ? myDrink.ingredient8 : null}{" "}
              {myDrink.measure8 ? ` | ${myDrink.measure8}` : null}
            </p>
            <p>
              {myDrink.ingredient9 ? myDrink.ingredient9 : null}{" "}
              {myDrink.measure9 ? ` | ${myDrink.measure9}` : null}
            </p>
            <p>
              {myDrink.ingredient10 ? myDrink.ingredient10 : null}{" "}
              {myDrink.measure10 ? ` | ${myDrink.measure10}` : null}
            </p>
            <p>
              {myDrink.ingredient11 ? myDrink.ingredient11 : null}{" "}
              {myDrink.measure11 ? ` | ${myDrink.measure11}` : null}
            </p>
            <p>
              {myDrink.ingredient12 ? myDrink.ingredient12 : null}{" "}
              {myDrink.measure12 ? ` | ${myDrink.measure12}` : null}
            </p>
            <p>
              {myDrink.ingredient13 ? myDrink.ingredient13 : null}{" "}
              {myDrink.measure13 ? ` | ${myDrink.measure13}` : null}
            </p>
            <p>
              {myDrink.ingredient14 ? myDrink.ingredient14 : null}{" "}
              {myDrink.measure14 ? ` | ${myDrink.measure14}` : null}
            </p>
            <p>
              {myDrink.ingredient15 ? myDrink.ingredient15 : null}{" "}
              {myDrink.measure15 ? ` | ${myDrink.measure15}` : null}
            </p>
          </div>
          <br></br>

          <div
            style={{
              height: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2>Instructions</h2>
            <hr className="drink-name"/>

            <p className="instructions">{myDrink.directions}</p>
          </div>
          <div
            style={{
              height: "50px",
              width: "150px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Link to={{ pathname: "/editMyDrink", state: myDrink }}>
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

const mapStateToProps = (state, { match }) =>{
  const id = match.params.id * 1;
  let myDrink = state.myDrinks.find((myDrink) => myDrink.id === id) || {};

  return {
    auth: state.auth,
    myDrink
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchMyDrinks: (user) => dispatch(fetchMyDrinks(user)),
      deleteMyDrink: (drink) => dispatch(deleteMyDrink(drink)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(MyDrink);
