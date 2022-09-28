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
    console.log(myDrink)

    return (
      <div className="wholething">
        
          
        <div>

            <h2 className="drink-nameh1">{myDrink.strDrink}</h2>
            <hr></hr>
            <hr></hr>

          </div>
       
       <div className="wholecontainer">

        <div>   
          <img className="singledrinkimg"
            src={
              myDrink.strDrinkThumb
                ? myDrink.strDrinkThumb
                : "https://www.plslwd.org/wp-content/plugins/lightbox/images/No-image-found.jpg"
            }
          ></img>
        </div>

        <div>
        
          <div>
            <h3>INGREDIENTS</h3>

            <p>
              {myDrink.strIngredient1 ? myDrink.strIngredient1 : null}{" "}
              {myDrink.strMeasure1 ? ` | ${myDrink.strMeasure1}` : null}
            </p>
            <p>
              {myDrink.strIngredient2 ? myDrink.strIngredient2 : null}{" "}
              {myDrink.strMeasure2 ? ` | ${myDrink.strMeasure2}` : null}
            </p>
            <p>
              {myDrink.strIngredient3 ? myDrink.strIngredient3 : null}{" "}
              {myDrink.strMeasure3 ? ` | ${myDrink.strMeasure3}` : null}
            </p>
            <p>
              {myDrink.strIngredient4 ? myDrink.strIngredient4 : null}{" "}
              {myDrink.strMeasure4 ? ` | ${myDrink.strMeasure4}` : null}
            </p>
            <p>
              {myDrink.strIngredient5 ? myDrink.strIngredient5 : null}{" "}
              {myDrink.strMeasure5 ? ` | ${myDrink.strMeasure5}` : null}
            </p>
            <p>
              {myDrink.strIngredient6 ? myDrink.strIngredient6 : null}{" "}
              {myDrink.strMeasure6 ? ` | ${myDrink.strMeasure6}` : null}
            </p>
            <p>
              {myDrink.strIngredient7 ? myDrink.strIngredient7 : null}{" "}
              {myDrink.strMeasure7 ? ` | ${myDrink.strMeasure7}` : null}
            </p>
            <p>
              {myDrink.strIngredient8 ? myDrink.strIngredient8 : null}{" "}
              {myDrink.strMeasure8 ? ` | ${myDrink.strMeasure8}` : null}
            </p>
            <p>
              {myDrink.strIngredient9 ? myDrink.strIngredient9 : null}{" "}
              {myDrink.strMeasure9 ? ` | ${myDrink.strMeasure9}` : null}
            </p>
            <p>
              {myDrink.strIngredient10 ? myDrink.strIngredient10 : null}{" "}
              {myDrink.strMeasure10 ? ` | ${myDrink.strMeasure10}` : null}
            </p>
            <p>
              {myDrink.strIngredient11 ? myDrink.strIngredient11 : null}{" "}
              {myDrink.strMeasure11 ? ` | ${myDrink.strMeasure11}` : null}
            </p>
            <p>
              {myDrink.strIngredient12 ? myDrink.strIngredient12 : null}{" "}
              {myDrink.strMeasure12 ? ` | ${myDrink.strMeasure12}` : null}
            </p>
            <p>
              {myDrink.strIngredient13 ? myDrink.strIngredient13 : null}{" "}
              {myDrink.strMeasure13 ? ` | ${myDrink.strMeasure13}` : null}
            </p>
            <p>
              {myDrink.strIngredient14 ? myDrink.strIngredient14 : null}{" "}
              {myDrink.strMeasure14 ? ` | ${myDrink.strMeasure14}` : null}
            </p>
            <p>
              {myDrink.strIngredient15 ? myDrink.strIngredient15 : null}{" "}
              {myDrink.strMeasure15 ? ` | ${myDrink.strMeasure15}` : null}
            </p>
          </div>
          <br></br>
<hr></hr>
          <div>
            <h3>INSTRUCTIONS</h3>
            <p className="instructions">{myDrink.strInstructions}</p>
          </div>

          
            <div className="buttons">
            <button className="edit"><Link to={{ pathname: `/editMyDrink/${myDrink.id}` }}>
             EDIT
            </Link></button>
            <button className="trash"><Link to="/myDrinks" onClick={() => deleteMyDrink(myDrink)}>
            REMOVE
            </Link></button>
            </div>

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
