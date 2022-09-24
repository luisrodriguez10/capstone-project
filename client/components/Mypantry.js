import React, {Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getItems, createItem, updateItem, deleteItem } from '../store';
import axios from 'axios';

class Mypantry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredient: '',
      recipes: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
  }
  componentDidMount() {
    const { auth, items } = this.props;
    if (items.length === 0 || auth.id !== items[0].userId) {    
      this.props.getItems(auth.id);
    }
  }
  componentDidUpdate(prevProps) {
    if (!prevProps.auth.id && this.props.auth.id) {
      const { auth } = this.props;
      this.props.getItems(auth.id);
    }
  }
  handleClick(item) {
    item.stock = !item.stock;
    this.props.updateItem(item); 
  }
  async handleChange(event) {
    this.setState({ ingredient: event.target.value, recipes: [] });
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.COCKTAIL_DB_KEY}/filter.php?i=${event.target.value}`);
    if (response.data !== '') {
      const drinksObj = response.data;
      this.setState({ recipes: drinksObj.drinks });
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    const { auth } = this.props;
    const { ingredient } = this.state;
    this.props.createItem({ name: ingredient, stock: true, userId: auth.id });
    this.setState({ ingredient: '', recipes: [] });
  }
  handleClickDelete(id) {
    this.props.deleteItem(id);
  }
  render() {
    const { auth, items } = this.props;
    const { ingredient, recipes } = this.state;
    const { handleClick, handleChange, handleSubmit, handleClickDelete } = this;
    return(
      <div>
        <h2>Add Ingredients</h2>
        <form onSubmit={handleSubmit}>
          <input name='ingredient' type='text' value={ingredient} onChange={handleChange} />
          <button>add to pantry</button>
        </form>
        {
          recipes.length !== 0 ? `${recipes.length} recipes using ${ingredient}` : '*there are currently no recipes using this ingredient'
        }
        <h2>My Ingredients</h2>
        <ul>
          {
            items
              .filter((item) => item.stock === true)
              .map((item) => {
                return (
                  <li key={item.id}>
                    <span>{item.name}</span>
                    <button onClick={() => handleClick(item)}>remove from pantry</button><br />
                    <button onClick={() => handleClickDelete(item.id)}>delete item</button>
                    <Link to={`/Recipes/${item.name}`}>{item.drinks.length} recipes using {item.name}</Link>
                  </li>
                );
              })
          }
        </ul>
        <h2>Out of Stock</h2>
        <ul>
          {
            items
              .filter((item) => item.stock === false)
              .map((item) => {
                return (
                  <li key={item.id}>
                    <span>{item.name}</span>
                    <button onClick={() => handleClick(item)}>add back to pantry</button>
                    <button onClick={() => handleClickDelete(item.id)}>delete item</button>
                  </li>
                );
              })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    items: state.myPantry,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItems: (userId) => {
      dispatch(getItems(userId));
    },
    createItem: (item) => {
      dispatch(createItem(item));
    },
    updateItem: (item) => {
      dispatch(updateItem(item));
    },
    deleteItem: (id) => {
      dispatch(deleteItem(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mypantry);
