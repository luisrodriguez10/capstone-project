import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes, fetchIngredients, fetchPantry } from '../store';
import { Link } from "react-router-dom";

class Recipes extends Component {
	constructor() {
		super();
		this.state = {
			currentPage: 1,
			productsPerPage: 9,
			listPantry: false
		}
		this.pantryToggle = this.pantryToggle.bind(this)
	}
	componentDidMount() {
		this.props.fetchRecipes();
		this.props.fetchIngredients();
		this.props.fetchPantry( this.props.auth );
		console.log( this.props.auth )
	}
	pantryToggle(){
		this.setState({ listPantry: !this.state.listPantry })
	}
	render() {
		const { recipes, ingredients, pantry } = this.props;
		const { currentPage, productsPerPage, listPantry } = this.state;
		const { pantryToggle }  = this;
		const results = recipes.drinks;
		console.log( results );
		console.log( ingredients );
		console.log( pantry );

		// Pagination setup
		const indexOfLastPost = currentPage * productsPerPage;
		const indexOfFirstPost = indexOfLastPost - productsPerPage;
		let currentResults = [];
		let pageNumbers = [];
		if( results ) {
			const pageResults = results
				.sort( (a,b) => a.strDrink.localeCompare(b.strDrink))
				.slice(indexOfFirstPost, indexOfLastPost);
			pageResults
				.map( recipe => {
				currentResults.push(recipe)
			})
		}

		for (let i = 1; i <= Math.ceil(results?.length / productsPerPage); i++){
			pageNumbers.push(i);
		}
		const setPage = (pageNum) => {
			this.setState({ currentPage: pageNum })
		}

		console.log(currentResults)

		// Create list of ingredients 
		// For now just click one ingredient and set as state for search url

		return(
			<div>
				<div className='ingredient-list'>
					<button onClick={ pantryToggle }>pantry</button>
					{	
						listPantry ? 
						pantry.map( ingredient => {
							return (
								<li key={ ingredient.id }> { ingredient.name }</li>
							)
						}) :
						ingredients.map( ingredient => {
							return (
								<li key={ ingredient.id }> { ingredient.name }</li>
							)
						})
					}
				</div>
				<ul>
					{
						results ? 
						currentResults.map( recipe => {
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
									{ recipe.strDrink }
								</li>
							)
						})
						: null
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
		fetchRecipes: () => dispatch(fetchRecipes()),
		fetchIngredients: () => dispatch(fetchIngredients()),
		fetchPantry: ( user ) => dispatch(fetchPantry( user ))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
