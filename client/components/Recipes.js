import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../store';
import { Link } from "react-router-dom";

class Recipes extends Component {
	constructor() {
		super();
		this.state = {
			currentPage: 1,
			productsPerPage: 9
		}
	}
	async componentDidMount() {
		await this.props.fetchRecipes();
	}
	render() {
		const { recipes } = this.props;
		const { currentPage, productsPerPage } = this.state;
		const results = recipes.drinks;
		console.log( results );

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
		recipes: state.recipes
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return{
		fetchRecipes: () => dispatch(fetchRecipes())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);


// render() {
// 	console.log(this.props.products)
// 	const indexOfLastPost = this.state.currentPage * this.state.productsPerPage;
// 	const indexOfFirstPost = indexOfLastPost - this.state.productsPerPage;
// 	const currentProducts = this.props.products.slice(indexOfFirstPost, indexOfLastPost);

// 	const pageNumbers = []

// 	const products = this.props.products;

// 	for (let i = 1; i <= Math.ceil(products.length / this.state.productsPerPage); i++){
// 		pageNumbers.push(i);
// 	}
// 	const setPage = (pageNum) => {
// 		this.setState({currentPage: pageNum})
// 	}

// 	console.log(pageNumbers)

// 	return (
// 		<main>
// 			<h2>Products</h2>
// 			<ul>
// 				{
// 					currentProducts
// 					.sort( (a,b) => a.name.localeCompare(b.name) )
// 					.map( product => {
// 						return (
// 							<li key={ product.id }>
// 								<img src={ product.imageUrl } alt={`${ product.name } Image`}></img><br></br>
// 								<Link to={`/products/${ product.id }`}>{ product.name }</Link> - ${ product.price }
// 							</li>
// 						)
// 					})
// 				}
// 			</ul>
// 			<div>
// 				{
// 					pageNumbers.map((pageNum, index) => (
// 						<button key={ index } onClick={() => {setPage(pageNum)}}>{pageNum}</button>
// 					))
// 				}
// 			</div>
// 		</main>
// 		)
// 	}
// }