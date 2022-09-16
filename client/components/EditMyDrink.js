import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMyDrinks, updateMyDrink } from "../store";

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
    this.onChange = this.onChange.bind(this);
    this.save = this.save.bind(this);
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

  async save(ev) {
    ev.preventDefault();
    let drink = {
      id: this.props.drink.id,
      ingredient1: this.state.ingredient1,
      ingredient2: this.state.ingredient2,
      ingredient3: this.state.ingredient3,
      ingredient4: this.state.ingredient4,
      ingredient5: this.state.ingredient5,
      ingredient6: this.state.ingredient6,
      ingredient7: this.state.ingredient7,
      ingredient8: this.state.ingredient8,
      ingredient9: this.state.ingredient9,
      ingredient10: this.state.ingredient10,
      ingredient11: this.state.ingredient11,
      ingredient12: this.state.ingredient12,
      ingredient13: this.state.ingredient13,
      ingredient14: this.state.ingredient14,
      ingredient15: this.state.ingredient15,
      measure1: this.state.measure1,
      measure2: this.state.measure2,
      measure3: this.state.measure3,
      measure4: this.state.measure4,
      measure5: this.state.measure5,
      measure6: this.state.measure6,
      measure7: this.state.measure7,
      measure8: this.state.measure8,
      measure9: this.state.measure9,
      measure10: this.state.measure10,
      measure11: this.state.measure11,
      measure12: this.state.measure12,
      measure13: this.state.measure13,
      measure14: this.state.measure14,
      measure15: this.state.measure15,
      directions: this.state.directions,
    };
    this.props.updateMyDrink(drink);
  }

  render() {
    const { onChange, save } = this;
    const { drink, history } = this.props;
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
      <main className="container mt-4">
        <div>
          <div>
            <h2 style={{ textAlign: "center" }}>Edit My Drink</h2>
            <form className="row g-3 w-50 mt-4" onSubmit={save}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={drink.imageURL}
                  style={{
                    width: "8rem",
                    height: "8rem",
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                    borderRadius: "50%",
                  }}
                ></img>
                <div className="mt-4">
                  <h2>{drink.drinkName}</h2>
                  {/* <label
                  htmlFor="drinkName"
                  className="form-label small"
                >
                  Drink
                </label>
                <input
                  value={drinkName}
                  name="drinkName"
                  type="text"
                  className="form-control"
                  disabled
                ></input> */}
                </div>
                {drink.ingredient1 ? (
                  <div className="mt-4">
                    <label htmlFor="ingredient1" className="form-label small">
                      Ingredient 1
                    </label>
                    <input
                      value={ingredient1}
                      name="ingredient1"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.measure1 ? (
                  <div className="mt-4">
                    <label htmlFor="measure1" className="form-label small">
                      Measure 1
                    </label>
                    <input
                      value={measure1}
                      name="measure1"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.ingredient2 ? (
                  <div className="mt-4">
                    <label htmlFor="ingredient2" className="form-label small">
                      Ingredient 2
                    </label>
                    <input
                      value={ingredient2}
                      name="ingredient2"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.measure2 ? (
                  <div className="mt-4">
                    <label htmlFor="measure2" className="form-label small">
                      Measure 2
                    </label>
                    <input
                      value={measure2}
                      name="measure2"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.ingredient3 ? (
                  <div className="mt-4">
                    <label htmlFor="ingredient3" className="form-label small">
                      Ingredient 3
                    </label>
                    <input
                      value={ingredient3}
                      name="ingredient3"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.measure3 ? (
                  <div className="mt-4">
                    <label htmlFor="measure1" className="form-label small">
                      Measure 3
                    </label>
                    <input
                      value={measure3}
                      name="measure3"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.ingredient4 ? (
                  <div className="mt-4">
                    <label htmlFor="ingredient4" className="form-label small">
                      Ingredient 4
                    </label>
                    <input
                      value={ingredient4}
                      name="ingredient4"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.measure4 ? (
                  <div className="mt-4">
                    <label htmlFor="measure4" className="form-label small">
                      Measure 4
                    </label>
                    <input
                      value={measure4}
                      name="measure4"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.ingredient5 ? (
                  <div className="mt-4">
                    <label htmlFor="ingredient5" className="form-label small">
                      Ingredient 5
                    </label>
                    <input
                      value={ingredient5}
                      name="ingredient5"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.measure5 ? (
                  <div className="mt-4">
                    <label htmlFor="measure1" className="form-label small">
                      Measure 5
                    </label>
                    <input
                      value={measure5}
                      name="measure5"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.ingredient6 ? (
                  <div className="mt-4">
                    <label htmlFor="ingredient6" className="form-label small">
                      Ingredient 6
                    </label>
                    <input
                      value={ingredient6}
                      name="ingredient6"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.measure6 ? (
                  <div className="mt-4">
                    <label htmlFor="measure1" className="form-label small">
                      Measure 6
                    </label>
                    <input
                      value={measure6}
                      name="measure6"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.ingredient7 ? (
                  <div className="mt-4">
                    <label htmlFor="ingredient1" className="form-label small">
                      Ingredient 7
                    </label>
                    <input
                      value={ingredient7}
                      name="ingredient7"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.measure7 ? (
                  <div className="mt-4">
                    <label htmlFor="measure7" className="form-label small">
                      Measure 7
                    </label>
                    <input
                      value={measure7}
                      name="measure7"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.ingredient8 ? (
                  <div className="mt-4">
                    <label htmlFor="ingredient8" className="form-label small">
                      Ingredient 8
                    </label>
                    <input
                      value={ingredient8}
                      name="ingredient8"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.measure8 ? (
                  <div className="mt-4">
                    <label htmlFor="measure8" className="form-label small">
                      Measure 8
                    </label>
                    <input
                      value={measure8}
                      name="measure8"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.ingredient9 ? (
                  <div className="mt-4">
                    <label htmlFor="ingredient9" className="form-label small">
                      Ingredient 9
                    </label>
                    <input
                      value={ingredient9}
                      name="ingredient9"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.measure9 ? (
                  <div className="mt-4">
                    <label htmlFor="measure9" className="form-label small">
                      Measure 9
                    </label>
                    <input
                      value={measure9}
                      name="measure9"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.ingredient10 ? (
                  <div className="mt-4">
                    <label htmlFor="ingredient10" className="form-label small">
                      Ingredient 10
                    </label>
                    <input
                      value={ingredient10}
                      name="ingredient10"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.measure10 ? (
                  <div className="mt-4">
                    <label htmlFor="measure10" className="form-label small">
                      Measure 10
                    </label>
                    <input
                      value={measure10}
                      name="measure10"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.ingredient11 ? (
                  <div className="mt-4">
                    <label htmlFor="ingredient11" className="form-label small">
                      Ingredient 11
                    </label>
                    <input
                      value={ingredient11}
                      name="ingredient11"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.measure11 ? (
                  <div className="mt-4">
                    <label htmlFor="measure11" className="form-label small">
                      Measure 11
                    </label>
                    <input
                      value={measure11}
                      name="measure11"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.ingredient12 ? (
                  <div className="mt-4">
                    <label htmlFor="ingredient12" className="form-label small">
                      Ingredient 12
                    </label>
                    <input
                      value={ingredient12}
                      name="ingredient12"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.measure12 ? (
                  <div className="mt-4">
                    <label htmlFor="measure12" className="form-label small">
                      Measure 12
                    </label>
                    <input
                      value={measure12}
                      name="measure12"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.ingredient13 ? (
                  <div className="mt-4">
                    <label
                      htmlFor="ingredient13xw"
                      className="form-label small"
                    >
                      Ingredient 13
                    </label>
                    <input
                      value={ingredient13}
                      name="ingredient13"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.measure13 ? (
                  <div className="mt-4">
                    <label htmlFor="measure13" className="form-label small">
                      Measure 13
                    </label>
                    <input
                      value={measure13}
                      name="measure13"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.ingredient14 ? (
                  <div className="mt-4">
                    <label htmlFor="ingredient14" className="form-label small">
                      Ingredient 14
                    </label>
                    <input
                      value={ingredient14}
                      name="ingredient14"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.measure14 ? (
                  <div className="mt-4">
                    <label htmlFor="measure14" className="form-label small">
                      Measure 14
                    </label>
                    <input
                      value={measure14}
                      name="measure14"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.ingredient15 ? (
                  <div className="mt-4">
                    <label htmlFor="ingredient15" className="form-label small">
                      Ingredient 15
                    </label>
                    <input
                      value={ingredient15}
                      name="ingredient15"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.measure15 ? (
                  <div className="mt-4">
                    <label htmlFor="measure15" className="form-label small">
                      Measure 15
                    </label>
                    <input
                      value={measure15}
                      name="measure15"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                <div className="mt-4">
                  <label htmlFor="directions" className="form-label small">
                    Directions
                  </label>
                  <textarea
                    value={directions}
                    name="directions"
                    type="text"
                    className="form-control"
                    onChange={onChange}
                  ></textarea>
                </div>
                <div>
                  <button>Save</button>
                  <button onClick={() => history.push("/myDrinks")}>
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = ({ auth, myDrinks }, { location }) => {
  const drink =
    myDrinks.find((drink) => drink.id === location.state.id * 1) || {};
  return {
    auth,
    drink,
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    fetchMyDrinks: (user) => dispatch(fetchMyDrinks(user)),
    updateMyDrink: (drink) => {
      console.log(drink)
      dispatch(updateMyDrink(drink, history))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMyDrink);
