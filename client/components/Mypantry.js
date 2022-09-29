import React, {Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getItems, createItem, updateItem, deleteItem } from '../store';
import { RotatingLines } from "react-loader-spinner";
import axios from 'axios';
import "./Mypantry.css";

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
          <div className='everything'>

       <div className='tophalf'>
       <div className='my-ingredientsflex'>
       <div>        

          <div className='entireaddingredients'>
          {/* <hr className='tophr'></hr> */}

        <h2 className='addingredients'>ADD INGREDIENTS</h2>
        <form onSubmit={handleSubmit}>
          <input class="inputingredient" name='ingredient' type='text' value={ingredient} onChange={handleChange} />
          <button className='addtopantrybutton'>ADD TO PANTRY</button>
        </form>
        <div className='thereare'>
        {
          recipes.length !== 0 ? `${recipes.length} recipes using ${ingredient}` : '*there are currently no recipes using this ingredient'
        }

        <br></br>
        <br></br>
        <br></br>

        <hr className='pantryhrr'></hr>

        {/* <hr className='tophr'></hr> */}
        </div>
        </div> 
        <h2 className='myingredients'>MY PANTRY</h2>
        <div className='listofingredients'>
          
          <ul className='unorderedlist'>
            {
              items.length === 0 ? <div
              style={{ marginLeft: '40%', marginTop: '35%' }}
            >
              <RotatingLines
                strokeColor="black"
                strokeWidth="5"
                animationDuration="0.75"
                width="50"
                visible={true}
              />
            </div> : 
              items
                .filter((item) => item.stock === true)
                .sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
                .map((item) => {
                  return (
                    
                    <li key={item.id}>
                      <div className='ingr'>
                      <span className='ingredient-names'>{item.name}</span>
                      <div className="nameofpantryy">
                      <button className="removefrompantry" onClick={() => handleClick(item)}>REMOVE FROM PANTRY</button>
                      <button className="removefrompantry" onClick={() => handleClickDelete(item.id)}>DELETE ITEM</button>
                      </div>
                      <div className='linktorecipes'><Link to={`/Recipes/${item.name}`}><div className='linkblack'>*{item.drinks.length} recipes using {item.name}</div></Link></div>
                      </div>
                    </li>
                  );
                })
            }
          </ul>
          </div>
        </div>
        <div>
        <img className="img" src="https://i.pinimg.com/564x/b2/ff/c6/b2ffc6dc7dbe2a08a461b993bab2dd4d.jpg" width="500" height="500px"></img>
        </div>
        </div>
        </div>

        <div>
        <hr className='middlehr1'></hr>
        <div className="addtopantry">
          <div>
          <img className="img1" src="https://i.pinimg.com/564x/5c/ae/34/5cae3497e9d2d8e3ec3b20892c8f1a8c.jpg" width="500" height="500px"></img>
          </div>

        <div>
        <br></br>
        <div>
        <h2 className='outofstock'>OUT OF STOCK</h2>
        <ul className='overflow'>
          {
            items.length === 0 ? <div
            style={{ marginLeft: '4%', marginTop: '15%' }}
          >
            <RotatingLines
              strokeColor="black"
              strokeWidth="5"
              animationDuration="0.75"
              width="50"
              visible={true}
            />
          </div> :
            items
              .filter((item) => item.stock === false)
              .map((item) => {
                return (
                  <li className ="list" key={item.id}>
                    <div className='oos'>
                    <div className='oosname'>{item.name}</div>

                    <div className='oosbuttons'>
                    <div><button className="removefrompantry" onClick={() => handleClick(item)}>ADD BACK TO PANTRY</button><br /></div>
                    
                  <div><button className="removefrompantry" onClick={() => handleClickDelete(item.id)}>DELETE ITEM</button></div>
                  </div>

                    </div>

                  </li>
                );
              })
          }
        </ul>
        </div>
        </div>
        </div>
<br></br>
<br></br>
        </div>
        </div>
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