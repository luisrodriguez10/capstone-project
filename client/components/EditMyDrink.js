import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMyDrinks } from "../store";

class EditMyDrink extends Component {
  constructor() {
    super();
    this.state = {
      drinkName: "",
      alcoholic: false,
      ingredient1: "",
      ingredient2: "",
      ingredient3: "",
      ingredient4: "",
      ingredient5: "",
      ingredient6: "",
      ingredient7: "",
      ingredient8: "",
      ingredient9: "",
      ingredient10: "",
      ingredient11: "",
      ingredient12: "",
      ingredient13: "",
      ingredient14: "",
      ingredient15: "",
      measure1: "",
      measure2: "",
      measure3: "",
      measure4: "",
      measure5: "",
      measure6: "",
      measure7: "",
      measure8: "",
      measure9: "",
      measure10: "",
      measure11: "",
      measure12: "",
      measure13: "",
      measure14: "",
      measure15: "",
      imageURL: "",
      directions: "",
      error: "",
    };
  }

  componentDidMount() {
    this.props.fetchMyDrinks(this.props.auth);
    if (this.props.drink.id) {
      this.setState({
        drinkName: this.props.drink.drinkName,
        alcoholic: this.props.drink.alcoholic,
        ingredient1: this.props.drink.ingredient1,
        ingredient2: this.props.drink.ingredient2,
        ingredient3: this.props.drink.ingredient3,
        ingredient4: this.props.drink.ingredient4,
        ingredient5: this.props.drink.ingredient5,
        ingredient6: this.props.drink.ingredient6,
        ingredient7: this.props.drink.ingredient7,
        ingredient8: this.props.drink.ingredient8,
        ingredient9: this.props.drink.ingredient9,
        ingredient10: this.props.drink.ingredient10,
        ingredient11: this.props.drink.ingredient11,
        ingredient12: this.props.drink.ingredient12,
        ingredient13: this.props.drink.ingredient13,
        ingredient14: this.props.drink.ingredient14,
        ingredient15: this.props.drink.ingredient15,
        measure1: this.props.drink.measure1,
        measure2: this.props.drink.measure2,
        measure3: this.props.drink.measure3,
        measure4: this.props.drink.measure4,
        measure5: this.props.drink.measure5,
        measure6: this.props.drink.measure6,
        measure7: this.props.drink.measure7,
        measure8: this.props.drink.measure8,
        measure9: this.props.drink.measure9,
        measure10: this.props.drink.measure10,
        measure11: this.props.drink.measure11,
        measure12: this.props.drink.measure12,
        measure13: this.props.drink.measure13,
        measure14: this.props.drink.measure14,
        measure15: this.props.drink.measure15,
        imageURL: this.props.drink.imageURL,
        directions: this.props.drink.directions,
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.drink.id && this.props.drink.id) {
      this.setState({
        drinkName: this.props.drink.drinkName,
        alcoholic: this.props.drink.alcoholic,
        ingredient1: this.props.drink.ingredient1,
        ingredient2: this.props.drink.ingredient2,
        ingredient3: this.props.drink.ingredient3,
        ingredient4: this.props.drink.ingredient4,
        ingredient5: this.props.drink.ingredient5,
        ingredient6: this.props.drink.ingredient6,
        ingredient7: this.props.drink.ingredient7,
        ingredient8: this.props.drink.ingredient8,
        ingredient9: this.props.drink.ingredient9,
        ingredient10: this.props.drink.ingredient10,
        ingredient11: this.props.drink.ingredient11,
        ingredient12: this.props.drink.ingredient12,
        ingredient13: this.props.drink.ingredient13,
        ingredient14: this.props.drink.ingredient14,
        ingredient15: this.props.drink.ingredient15,
        measure1: this.props.drink.measure1,
        measure2: this.props.drink.measure2,
        measure3: this.props.drink.measure3,
        measure4: this.props.drink.measure4,
        measure5: this.props.drink.measure5,
        measure6: this.props.drink.measure6,
        measure7: this.props.drink.measure7,
        measure8: this.props.drink.measure8,
        measure9: this.props.drink.measure9,
        measure10: this.props.drink.measure10,
        measure11: this.props.drink.measure11,
        measure12: this.props.drink.measure12,
        measure13: this.props.drink.measure13,
        measure14: this.props.drink.measure14,
        measure15: this.props.drink.measure15,
        imageURL: this.props.drink.imageURL,
        directions: this.props.drink.directions,
      });
    }
  }

  onChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value,
    });
  }

  render() {
    const { onChange } = this;
    const {
      drinkName,
      alcoholic,
      ingredient1,
      ingredient2,
      ingredient3,
      ingredient4,
      ingredient5,
      ingredient6,
      ingredient7,
      ingredient8,
      ingredient9,
      ingredient10,
      ingredient11,
      ingredient12,
      ingredient13,
      ingredient14,
      ingredient15,
      measure1,
      measure2,
      measure3,
      measure4,
      measure5,
      measure6,
      measure7,
      measure8,
      measure9,
      measure10,
      measure11,
      measure12,
      measure13,
      measure14,
      measure15,
      imageURL,
      directions,
      error,
    } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="drinkName">Drink</label>
          <input
            value={drinkName}
            name="drinkName"
            type="text"
            onChange={onChange}
          ></input>
          {this.props.drink.ingredient1 ? <div><label htmlFor="ingredient1">Ingredient 1</label>
          <input
            value={ingredient1}
            name="ingredient1"
            type="text"
            onChange={onChange}
          ></input></div> : null} 
          <label htmlFor="ingredient2">Ingredient 2</label>
          <input
            value={ingredient2}
            name="ingredient2"
            type="text"
            onChange={onChange}
          ></input>
          <label htmlFor="ingredient3">Ingredient 3</label>
          <input
            value={ingredient3}
            name="ingredient3"
            type="text"
            onChange={onChange}
          ></input>
          <label htmlFor="ingredient4">Ingredient 4</label>
          <input
            value={ingredient4}
            name="ingredient4"
            type="text"
            onChange={onChange}
          ></input>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, myDrinks }, { location }) => {
  console.log(location.state);
  console.log(myDrinks);
  const drink =
    myDrinks.find((drink) => drink.id === location.state.id * 1) || {};
  return {
    auth,
    drink,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMyDrinks: (user) => dispatch(fetchMyDrinks(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMyDrink);
