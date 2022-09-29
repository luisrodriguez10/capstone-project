import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { createMyDrink } from '../store';
import Reviews from './Reviews';
import "./mydrinks.css"
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
  render() {
    const { createMyDrink, auth } = this.props
    const { drink } = this.state;
    const recipe = drink.drinks ? drink.drinks[0] : {}
    function myFunction() {
      alert("Added to my drinks!");
    }
    return (
      <div className='wholething'>
        <div>
          <h2 className='drink-nameh1'>{ recipe.strDrink }</h2>
          <hr/>
          <hr/>
        </div>
        <div className='wholecontainer'>
          <div>
            <img className='singledrinkimg'
              src={
                recipe.strDrinkThumb
                  ? recipe.strDrinkThumb
                  : "https://www.plslwd.org/wp-content/plugins/lightbox/images/No-image-found.jpg"
              }
              ></img>
          </div>
          <div>
            <div>
              <h3>INGREDIENTS</h3>

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
            <br></br>
            <hr></hr>
            <div>
              <h3>INSTRUCTIONS</h3>
              <p className='instructions'>{ recipe.strInstructions }</p>
            </div>
              <div className='recipe-page-button'>
                <button className='addbutton' onClick={ () => createMyDrink(recipe, auth.id) }>Add to My Drinks</button>
              </div>
          </div>
        </div>
      <div className='reviews'>
        <h2>Reviews</h2>
        <Reviews drinkId={recipe.idDrink}/>
      </div>
    </div>
  );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    createMyDrink: ( drink, userId ) => dispatch(createMyDrink(drink, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
