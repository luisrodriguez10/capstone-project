import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { createMyDrink } from '../store'
// import function to add to recipe list 

class Recipe extends Component{
  constructor(){
    super();
    this.state = {
      drink: {}
    }
  }
  async componentDidMount(){
    const drinkId = window.location.hash.slice(9)
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${ drinkId }`)
    this.setState({ drink: response.data })
  }
  onClick(ev) {
    
  }
  render() {
    const { createMyDrink } = this.props
    const { drink } = this.state;
    const recipe = drink.drinks ? drink.drinks[0] : {}
    console.log(drink)
    console.log(recipe)
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
            recipe.strDrinkThumb
              ? recipe.strDrinkThumb
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
          <h1>{ recipe.strDrink }</h1>
          <button onClick={ () => createMyDrink(recipe) }>+</button>
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
            { recipe.strIngredient1 ? recipe.strIngredient1 : null}{" "}
            { recipe.strMeasure1 ? ` | ${ recipe.strMeasure1 }` : null}
          </p>
          <p>
            {recipe.strIngredient2 ? recipe.strIngredient2 : null}{" "}
            {recipe.strMeasure2 ? ` | ${recipe.strMeasure2}` : null}
          </p>
          <p>
            {recipe.strIngredient3 ? recipe.strIngredient3 : null}{" "}
            {recipe.strMeasure3 ? ` | ${recipe.strMeasure3}` : null}
          </p>
          <p>
            {recipe.strIngredient4 ? recipe.strIngredient4 : null}{" "}
            {recipe.strMeasure4 ? ` | ${recipe.strMeasure4}` : null}
          </p>
          <p>
            {recipe.strIngredient5 ? recipe.strIngredient5 : null}{" "}
            {recipe.strMeasure5 ? ` | ${recipe.strMeasure5}` : null}
          </p>
          <p>
            {recipe.strIngredient6 ? recipe.strIngredient6 : null}{" "}
            {recipe.strMeasure6 ? ` | ${recipe.strMeasure6}` : null}
          </p>
          <p>
            {recipe.strIngredient7 ? recipe.strIngredient7 : null}{" "}
            {recipe.strMeasure7 ? ` | ${recipe.strMeasure7}` : null}
          </p>
          <p>
            {recipe.strIngredient8 ? recipe.strIngredient8 : null}{" "}
            {recipe.strMeasure8 ? ` | ${recipe.strMeasure8}` : null}
          </p>
          <p>
            {recipe.strIngredient9 ? recipe.strIngredient9 : null}{" "}
            {recipe.strMeasure9 ? ` | ${recipe.strMeasure9}` : null}
          </p>
          <p>
            {recipe.strIngredient10 ? recipe.strIngredient10 : null}{" "}
            {recipe.strMeasure10 ? ` | ${recipe.strMeasure10}` : null}
          </p>
          <p>
            {recipe.strIngredient11 ? recipe.strIngredient11 : null}{" "}
            {recipe.strMeasure11 ? ` | ${recipe.strMeasure11}` : null}
          </p>
          <p>
            {recipe.strIngredient12 ? recipe.strIngredient12 : null}{" "}
            {recipe.strMeasure12 ? ` | ${recipe.strMeasure12}` : null}
          </p>
          <p>
            {recipe.strIngredient13 ? recipe.strIngredient13 : null}{" "}
            {recipe.strMeasure13 ? ` | ${recipe.strMeasure13}` : null}
          </p>
          <p>
            {recipe.strIngredient14 ? recipe.strIngredient14 : null}{" "}
            {recipe.strMeasure14 ? ` | ${recipe.strMeasure14}` : null}
          </p>
          <p>
            {recipe.strIngredient15 ? recipe.strIngredient15 : null}{" "}
            {recipe.strMeasure15 ? ` | ${recipe.strMeasure15}` : null}
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
          <p>{ recipe.strInstructions }</p>
        </div>
        <div
          style={{
            height: "50px",
            width: "150px",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
        </div>
      </div>
    </div>
  );
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    createMyDrink: ( drink ) => dispatch(createMyDrink(drink))
  }
}

export default connect(null, mapDispatchToProps)(Recipe);