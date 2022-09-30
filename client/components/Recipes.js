import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRecipes, fetchIngredients, getItems } from "../store";
import { Link } from "react-router-dom";
import "./Recipes.css"

class Recipes extends Component {
  constructor() {
    super();
    const page = window.location.hash.slice(10);
    this.state = {
      currentPage: 1,
      productsPerPage: 9,
      listPantry: false,
      search: page ? page : "vodka",
      checked: [],
    };
    this.pantryToggle = this.pantryToggle.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }
  componentDidMount() {
    const { auth, items } = this.props;
    this.props.fetchRecipes(this.state.search);
    this.props.fetchIngredients();
    if (items.length === 0 || auth.id !== items[0].userId) {
      this.props.getItems(auth.id);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.checked) {
      if (prevState.checked.length !== this.state.checked.length) {
        this.props.fetchRecipes(this.state.search);
      }
    }
    if (!prevProps.auth.id && this.props.auth.id) {
      const { auth } = this.props;
      this.props.getItems(auth.id);
    }
  }
  pantryToggle() {
    this.setState({ listPantry: !this.state.listPantry });
  }
  handleCheck(ev) {
    let updatedList = [...this.state.checked];
    if (ev.target.checked) {
      updatedList = [...this.state.checked, ev.target.value];
    } else {
      updatedList.splice(this.state.checked.indexOf(ev.target.value), 1);
    }
    this.setState({ checked: updatedList });
    let searchList = updatedList.length
      ? updatedList.reduce((total, item) => {
          return total + "," + item;
        })
      : "";
    this.setState({ search: searchList });
  }
  render() {
    const { recipes, ingredients, items } = this.props;
    const { currentPage, productsPerPage, listPantry, search, checked } =
      this.state;
    const { pantryToggle, handleCheck } = this;
    const results = recipes.drinks;
    let pageResults = [];

    // Pagination setup
    const indexOfLastPost = currentPage * productsPerPage;
    const indexOfFirstPost = indexOfLastPost - productsPerPage;
    let currentResults = [];
    let pageNumbers = [];
    if (results !== "") {
      console.log("results ", results);

      if (results === "None Found") {
        pageResults = [];
      } else {
        pageResults = results
          ? results
              .sort((a, b) => a.strDrink.localeCompare(b.strDrink))
              .slice(indexOfFirstPost, indexOfLastPost)
          : [];
        pageResults.map((recipe) => {
          currentResults.push(recipe);
        });
      }
      // if( results !== '' ) {
      // 	const pageResults = results
      // 		.sort( (a,b) => a.strDrink.localeCompare(b.strDrink))
      // 		.slice(indexOfFirstPost, indexOfLastPost);
      // 	pageResults
      // 		.map( recipe => {
      // 		currentResults.push(recipe)
      // 	})
      // }


		return(
		
			<div className='recipeseverything'>
				<div className='ingredient-list'>

{/* <div className='toggle'>
					<button className='toggle1' onClick={ pantryToggle }>MY PANTRY</button><button class="toggle1" onClick={ pantryToggle }>ALL INGREDIENTS</button>
					</div> */}

					<div className='recipesflex'>
					<div className='insideingred'> <div className='ingredtitle'>INGREDIENTS</div>
					<hr></hr>

							<div className='alphabet'>
					{	
						listPantry ? 
						
						items.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map( ingredient => {

							
							return (
								
									
									<div  className='a-f'>
						
									<input className='inputingred' class="checkbox" type="checkbox" value={ ingredient.name } key={ ingredient.id } onChange={ handleCheck }/>{ ingredient.name }
								</div>

							)
						
						})

						:
						ingredients.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map( ingredient => {
							return (
								<div>
									<input type="checkbox" value={ ingredient.name } key={ ingredient.id } onChange={ handleCheck }/>{ ingredient.name }
								</div>
							)
						})
					}
				</div>
				</div>
								
								
				<div className='insiderec'> <div className='ingredtitle'>DRINKS</div>
<hr></hr>
<div className='alphabet2'>
				<ul className='listrecipe'>
					{
						results ? 
						pageResults.map( recipe => {
							return (
								<li key={ recipe.idDrink }>
									<div className='insideflex'>
									<div>
									 <img
										style={{
											borderRadius: "50%",
											width: "100px",
											height: "100px",
											border: "1px solid",
											padding: "2px"
										}}
										src={ recipe.strDrinkThumb } alt={ `${ recipe.strDrink } Image` }>										
									</img>
									</div>
									<hr></hr>

									<div className='linkrec'>
									<Link to={`/recipe/${ recipe.idDrink }`}><div className="linkrec">{ recipe.strDrink }</div></Link>
									</div>

									</div>
								</li>
							)
						})
						: 'There are no recipes!'
					}
				</ul>
				<div>
					{
						pageResults.length ? pageNumbers.map((pageNum, index) => (
							<button key={ index } onClick={() => { setPage(pageNum) }}>{ pageNum }</button>
						)) : search ? 'There are no recipes with these ingredients!' : 'Choose your ingredients'
					}
				</div>

				</div>
				</div>
				</div>
				</div>
				<div>
					{
						pageNumbers.map((pageNum, index) => (
							<button key={ index } onClick={() => { setPage(pageNum) }}>{ pageNum }</button>
						))
					}
				</div>
				</div>

		)
	}

      for (let i = 1; i <= Math.ceil(results?.length / productsPerPage); i++) {
        pageNumbers.push(i);
      }
      const setPage = (pageNum) => {
        this.setState({ currentPage: pageNum });
      };

      console.log("currentResults", currentResults);
      console.log("search", search);

      // Create list of ingredients
      // For now just click one ingredient and set as state for search url

      return (
        <div>
          <div className="ingredient-list">
            <div className="toggle">
              <button className="toggle1" onClick={pantryToggle}>
                MY PANTRY
              </button>
              <button class="toggle1" onClick={pantryToggle}>
                ALL INGREDIENTS
              </button>
            </div>
            <div className="alphabet">
              {listPantry
                ? items
                    .sort((a, b) =>
                      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
                    )
                    .map((ingredient) => {
                      return (
                        <div className="a-f">
                          <div>
                            <input
                              class="checkbox"
                              type="checkbox"
                              value={ingredient.name}
                              key={ingredient.id}
                              onChange={handleCheck}
                            />
                            {ingredient.name}
                          </div>
                        </div>
                      );
                    })
                : ingredients
                    .sort((a, b) =>
                      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
                    )
                    .map((ingredient) => {
                      return (
                        <div>
                          <input
                            type="checkbox"
                            value={ingredient.name}
                            key={ingredient.id}
                            onChange={handleCheck}
                          />
                          {ingredient.name}
                        </div>
                      );
                    })}
            </div>
            <ul>
              {results
                ? results.map((recipe) => {
                    return (
                      <li key={recipe.idDrink}>
                        <img
                          style={{
                            borderRadius: "3px",
                            width: "50px",
                            height: "50px",
                          }}
                          src={recipe.strDrinkThumb}
                          alt={`${recipe.strDrink} Image`}
                        ></img>
                        <Link to={`/recipe/${recipe.idDrink}`}>
                          {recipe.strDrink}
                        </Link>
                      </li>
                    );
                  })
                : "There are no recipes!"}
            </ul>
            <div>
              {pageNumbers.map((pageNum, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setPage(pageNum);
                  }}
                >
                  {pageNum}
                </button>
              ))}
            </div>
          </div>
        </div>
      );
    }
  }


const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    recipes: state.recipes,
    ingredients: state.ingredients,
    items: state.myPantry,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipes: (search) => dispatch(fetchRecipes(search)),
    fetchIngredients: () => dispatch(fetchIngredients()),
    getItems: (userId) => {
      dispatch(getItems(userId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
