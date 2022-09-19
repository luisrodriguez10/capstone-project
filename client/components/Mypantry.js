import React, {Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getItems, updateItem } from '../store';

class Mypantry extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    const { auth } = this.props;
    this.props.getItems(auth.id);
  }
  handleClick(item) {
    item.stock = !item.stock;
    this.props.updateItem(item); 
  }
  render() {
    const { items } = this.props;
    const { handleClick } = this;
    return(
      <div>
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
                    <Link to=''>{item.drinks.length} recipes using {item.name}</Link>
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
    items: state.myPantry
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItems: (userId) => {
      dispatch(getItems(userId));
    },
    updateItem: (item) => {
      dispatch(updateItem(item));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mypantry);
