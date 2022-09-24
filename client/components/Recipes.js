import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes, fetchIngredients, fetchPantry } from '../store';
import { Link } from "react-router-dom";

class Recipes extends Component {
	constructor() {
		super();
		const page = window.location.hash.slice(10)
		this.state = {
			currentPage: 1,
			productsPerPage: 9,
			listPantry: false,
			search: page ? page : 'vodka',
			checked: []
		}
		this.pantryToggle = this.pantryToggle.bind(this)
		this.handleCheck = this.handleCheck.bind(this)
	}
	componentDidMount() {
		this.props.fetchRecipes( this.state.search );
		this.props.fetchIngredients();
		this.props.fetchPantry( this.props.auth );
	}
	componentDidUpdate(prevProps, prevState) {
		if ( prevState.checked ) {
			if( prevState.checked.length !== this.state.checked.length ) {
				this.props.fetchRecipes( this.state.search );
			}
		} 
	}
	pantryToggle() {
		this.setState({ listPantry: !this.state.listPantry })
	}
	handleCheck(ev) {
		let updatedList = [...this.state.checked]
		if (ev.target.checked) {
			updatedList = [...this.state.checked, ev.target.value]
		} else {
			updatedList.splice(this.state.checked.indexOf(ev.target.value), 1)
		}
		this.setState({ checked: updatedList })
		let searchList = updatedList.length ? 
			updatedList.reduce((total, item) => {
				return total + ',' + item;
			}) : "";
		this.setState({ search: searchList })
	}
	render() {
		const { recipes, ingredients, pantry } = this.props;
		const { currentPage, productsPerPage, listPantry, search, checked } = this.state;
		const { pantryToggle, handleCheck }  = this;
		const results = recipes.drinks;

		// Pagination setup
		const indexOfLastPost = currentPage * productsPerPage;
		const indexOfFirstPost = indexOfLastPost - productsPerPage;
		let currentResults = [];
		let pageNumbers = [];
		if ( results !== '') {
			console.log('results ', results)
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

		for (let i = 1; i <= Math.ceil(results?.length / productsPerPage); i++){
			pageNumbers.push(i);
		}
		const setPage = (pageNum) => {
			this.setState({ currentPage: pageNum })
		}

		console.log('currentResults', currentResults)

		// Create list of ingredients 
		// For now just click one ingredient and set as state for search url

		return(
			<div>

				<div className='ingredient-list'>
<div className='toggle'>
					<button className='toggle1' onClick={ pantryToggle }>MY PANTRY</button><button class="toggle1" onClick={ pantryToggle }>ALL INGREDIENTS</button></div>
							<div className='alphabet'>
								A-F
					{	
						listPantry ? 
						
						pantry.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map( ingredient => {

							if(ingredient.name[0] === "A" || ingredient.name[0] === "B" || ingredient.name[0] === "C" || ingredient.name[0] === "D" || ingredient.name[0] === "E" || ingredient.name[0] === "F" )
							return (
								<div  className='a-f'>
								<div>
									<input class="checkbox" type="checkbox" value={ ingredient.name } key={ ingredient.id } onChange={ handleCheck }/>{ ingredient.name }
								</div>
								</div>

							)
						
							if(ingredient.name[0] === "G" || ingredient.name[0] === "H" || ingredient.name[0] === "I" || ingredient.name[0] === "J" || ingredient.name[0] === "K" || ingredient.name[0] === "L" )
							return (
								<div className='g-l'>
									<input class="checkbox" type="checkbox" value={ ingredient.name } key={ ingredient.id } onChange={ handleCheck }/>{ ingredient.name }
								</div>
							)
							if(ingredient.name[0] === "M" || ingredient.name[0] === "N" || ingredient.name[0] === "O" || ingredient.name[0] === "P" || ingredient.name[0] === "Q" || ingredient.name[0] === "R" )
							return (
								<div className='m-r'>
									<input class="checkbox" type="checkbox" value={ ingredient.name } key={ ingredient.id } onChange={ handleCheck }/>{ ingredient.name }
								</div>
							)
							if(ingredient.name[0] === "S" || ingredient.name[0] === "T" || ingredient.name[0] === "U" || ingredient.name[0] === "V" || ingredient.name[0] === "W" || ingredient.name[0] === "X" || ingredient.name[0] === "Y" || ingredient.name[0] === "Z"   )
							return (
								<div className='s-f'>
									<input class="checkbox" type="checkbox" value={ ingredient.name } key={ ingredient.id } onChange={ handleCheck }/>{ ingredient.name }
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
				<ul>
					{
						results ? 
						results.map( recipe => {
							return (
								<li key={ recipe.idDrink }>
									 <img
										style={{
											borderRadius: "3px",
											width: "50px",
											height: "50px"
										}}
										src={ recipe.strDrinkThumb } alt={ `${ recipe.strDrink } Image` }>										
									</img>
									<Link to={`/recipe/${ recipe.idDrink }`}>{ recipe.strDrink }</Link>
								</li>
							)
						})
						: 'There are no recipes!'
					}
				</ul>
				<div>
					{
						pageNumbers.map((pageNum, index) => (
							<button key={ index } onClick={() => { setPage(pageNum) }}>{ pageNum }</button>
						))
					}
				</div>
			</div>
			</div>
		)
	}
}

const mapStateToProps = ( state ) => {
	return {
		auth: state.auth,
		recipes: state.recipes,
		ingredients: state.ingredients,
		pantry: state.pantry
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return{
		fetchRecipes: ( search ) => dispatch(fetchRecipes( search )),
		fetchIngredients: () => dispatch(fetchIngredients()),
		fetchPantry: ( user ) => dispatch(fetchPantry( user ))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
