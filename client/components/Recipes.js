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
					<button onClick={ pantryToggle }>Toggle Pantry List</button>
					{	
						listPantry ? 
						pantry.map( ingredient => {
							return (
								<div>
									<input type="checkbox" value={ ingredient.name } key={ ingredient.id } onChange={ handleCheck }/>{ ingredient.name }
								</div>
							)
						}) :
						ingredients.map( ingredient => {
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
