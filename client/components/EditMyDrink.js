import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMyDrinks, updateMyDrink } from "../store";

class EditMyDrink extends Component {
  constructor() {
    super();
    this.state = {
      strDrink: "",
      strAlcoholic: false,
      strIngredient1: "",
      strIngredient2: "",
      strIngredient3: "",
      strIngredient4: "",
      strIngredient5: "",
      strIngredient6: "",
      strIngredient7: "",
      strIngredient8: "",
      strIngredient9: "",
      strIngredient10: "",
      strIngredient11: "",
      strIngredient12: "",
      strIngredient13: "",
      strIngredient14: "",
      strIngredient15: "",
      strMeasure1: "",
      strMeasure2: "",
      strMeasure3: "",
      strMeasure4: "",
      strMeasure5: "",
      strMeasure6: "",
      strMeasure7: "",
      strMeasure8: "",
      strMeasure9: "",
      strMeasure10: "",
      strMeasure11: "",
      strMeasure12: "",
      strMeasure13: "",
      strMeasure14: "",
      strMeasure15: "",
      strDrinkThumb: "",
      avatar: "",
      strInstructions: "",
      error: "",
    };
    this.onChange = this.onChange.bind(this);
    this.save = this.save.bind(this);
  }

  componentDidMount() {
    this.el.addEventListener("change", (ev) => {
      const file = ev.target.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        this.setState({ avatar: reader.result });
      });
      reader.readAsDataURL(file);
    });
    this.props.fetchMyDrinks(this.props.auth);
    if (this.props.drink.id) {
      this.setState({
        strDrink: this.props.drink.strDrink,
        strAlcoholic: this.props.drink.strAlcoholic,
        strIngredient1: this.props.drink.strIngredient1,
        strIngredient2: this.props.drink.strIngredient2,
        strIngredient3: this.props.drink.strIngredient3,
        strIngredient4: this.props.drink.strIngredient4,
        strIngredient5: this.props.drink.strIngredient5,
        strIngredient6: this.props.drink.strIngredient6,
        strIngredient7: this.props.drink.strIngredient7,
        strIngredient8: this.props.drink.strIngredient8,
        strIngredient9: this.props.drink.strIngredient9,
        strIngredient10: this.props.drink.strIngredient10,
        strIngredient11: this.props.drink.strIngredient11,
        strIngredient12: this.props.drink.strIngredient12,
        strIngredient13: this.props.drink.strIngredient13,
        strIngredient14: this.props.drink.strIngredient14,
        strIngredient15: this.props.drink.strIngredient15,
        strMeasure1: this.props.drink.strMeasure1,
        strMeasure2: this.props.drink.strMeasure2,
        strMeasure3: this.props.drink.strMeasure3,
        strMeasure4: this.props.drink.strMeasure4,
        strMeasure5: this.props.drink.strMeasure5,
        strMeasure6: this.props.drink.strMeasure6,
        strMeasure7: this.props.drink.strMeasure7,
        strMeasure8: this.props.drink.strMeasure8,
        strMeasure9: this.props.drink.strMeasure9,
        strMeasure10: this.props.drink.strMeasure10,
        strMeasure11: this.props.drink.strMeasure11,
        strMeasure12: this.props.drink.strMeasure12,
        strMeasure13: this.props.drink.strMeasure13,
        strMeasure14: this.props.drink.strMeasure14,
        strMeasure15: this.props.drink.strMeasure15,
        strDrinkThumb: this.props.drink.strDrinkThumb,
        strInstructions: this.props.drink.strInstructions,
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.drink.id && this.props.drink.id) {
      
      this.setState({
        strDrink: this.props.drink.strDrink,
        strAlcoholic: this.props.drink.strAlcoholic,
        strIngredient1: this.props.drink.strIngredient1,
        strIngredient2: this.props.drink.strIngredient2,
        strIngredient3: this.props.drink.strIngredient3,
        strIngredient4: this.props.drink.strIngredient4,
        strIngredient5: this.props.drink.strIngredient5,
        strIngredient6: this.props.drink.strIngredient6,
        strIngredient7: this.props.drink.strIngredient7,
        strIngredient8: this.props.drink.strIngredient8,
        strIngredient9: this.props.drink.strIngredient9,
        strIngredient10: this.props.drink.strIngredient10,
        strIngredient11: this.props.drink.strIngredient11,
        strIngredient12: this.props.drink.strIngredient12,
        strIngredient13: this.props.drink.strIngredient13,
        strIngredient14: this.props.drink.strIngredient14,
        strIngredient15: this.props.drink.strIngredient15,
        strMeasure1: this.props.drink.strMeasure1,
        strMeasure2: this.props.drink.strMeasure2,
        strMeasure3: this.props.drink.strMeasure3,
        strMeasure4: this.props.drink.strMeasure4,
        strMeasure5: this.props.drink.strMeasure5,
        strMeasure6: this.props.drink.strMeasure6,
        strMeasure7: this.props.drink.strMeasure7,
        strMeasure8: this.props.drink.strMeasure8,
        strMeasure9: this.props.drink.strMeasure9,
        strMeasure10: this.props.drink.strMeasure10,
        strMeasure11: this.props.drink.strMeasure11,
        strMeasure12: this.props.drink.strMeasure12,
        strMeasure13: this.props.drink.strMeasure13,
        strMeasure14: this.props.drink.strMeasure14,
        strMeasure15: this.props.drink.strMeasure15,
        strDrinkThumb: this.props.drink.strDrinkThumb,
        strInstructions: this.props.drink.strInstructions,
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
      strIngredient1: this.state.strIngredient1,
      strIngredient2: this.state.strIngredient2,
      strIngredient3: this.state.strIngredient3,
      strIngredient4: this.state.strIngredient4,
      strIngredient5: this.state.strIngredient5,
      strIngredient6: this.state.strIngredient6,
      strIngredient7: this.state.strIngredient7,
      strIngredient8: this.state.strIngredient8,
      strIngredient9: this.state.strIngredient9,
      strIngredient10: this.state.strIngredient10,
      strIngredient11: this.state.strIngredient11,
      strIngredient12: this.state.strIngredient12,
      strIngredient13: this.state.strIngredient13,
      strIngredient14: this.state.strIngredient14,
      strIngredient15: this.state.strIngredient15,
      strMeasure1: this.state.strMeasure1,
      strMeasure2: this.state.strMeasure2,
      strMeasure3: this.state.strMeasure3,
      strMeasure4: this.state.strMeasure4,
      strMeasure5: this.state.strMeasure5,
      strMeasure6: this.state.strMeasure6,
      strMeasure7: this.state.strMeasure7,
      strMeasure8: this.state.strMeasure8,
      strMeasure9: this.state.strMeasure9,
      strMeasure10: this.state.strMeasure10,
      strMeasure11: this.state.strMeasure11,
      strMeasure12: this.state.strMeasure12,
      strMeasure13: this.state.strMeasure13,
      strMeasure14: this.state.strMeasure14,
      strMeasure15: this.state.strMeasure15,
      strInstructions: this.state.strInstructions,
      strDrinkThumb: this.state.avatar ? this.state.avatar : this.props.drink.strDrinkThumb,
    };
    this.props.updateMyDrink(drink);
  }

  render() {
    const { onChange, save } = this;
    const { drink, history } = this.props;
    const {
      strDrink,
      strAlcoholic,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strIngredient8,
      strIngredient9,
      strIngredient10,
      strIngredient11,
      strIngredient12,
      strIngredient13,
      strIngredient14,
      strIngredient15,
      strMeasure1,
      strMeasure2,
      strMeasure3,
      strMeasure4,
      strMeasure5,
      strMeasure6,
      strMeasure7,
      strMeasure8,
      strMeasure9,
      strMeasure10,
      strMeasure11,
      strMeasure12,
      strMeasure13,
      strMeasure14,
      strMeasure15,
      strDrinkThumb,
      avatar,
      strInstructions,
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
                  justifyContent: 'center'
                }}
              >
                {!avatar ? (
                  <img
                    src={drink.strDrinkThumb}
                    style={{
                      width: "8rem",
                      height: "8rem",
                      backgroundSize: "cover",
                      backgroundPosition: "top center",
                      borderRadius: "50%",
                    }}
                  ></img>
                ) : (
                  <img
                    src={avatar}
                    style={{
                      width: "8rem",
                      height: "8rem",
                      backgroundSize: "cover",
                      backgroundPosition: "top center",
                      borderRadius: "50%",
                    }}
                  ></img>
                )}
                <div className="mt-4">
                  <label className="form-label small">Upload Avatar</label>
                  <input
                    type="file"
                    className="form-control"
                    ref={(el) => (this.el = el)}
                    id="inputGroupFile02"
                  ></input>
                </div>
                <div className="mt-4">
                  <h2>{drink.strDrink}</h2>
                </div>
                {drink.strIngredient1 ? (
                  <div className="mt-4">
                    <label htmlFor="strIngredient1" className="form-label small">
                      ingredient1
                    </label>
                    <input
                      value={strIngredient1}
                      name="strIngredient1"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.strMeasure1 ? (
                  <div className="mt-4">
                    <label htmlFor="strMeasure1" className="form-label small">
                      measure 1
                    </label>
                    <input
                      value={strMeasure1}
                      name="strMeasure1"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.strIngredient2 ? (
                  <div className="mt-4">
                    <label htmlFor="strIngredient2" className="form-label small">
                      ingredient2
                    </label>
                    <input
                      value={strIngredient2}
                      name="strIngredient2"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.strMeasure2 ? (
                  <div className="mt-4">
                    <label htmlFor="strMeasure2" className="form-label small">
                      measure 2
                    </label>
                    <input
                      value={strMeasure2}
                      name="strMeasure2"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.strIngredient3 ? (
                  <div className="mt-4">
                    <label htmlFor="strIngredient3" className="form-label small">
                      ingredient3
                    </label>
                    <input
                      value={strIngredient3}
                      name="strIngredient3"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.strMeasure3 ? (
                  <div className="mt-4">
                    <label htmlFor="strMeasure1" className="form-label small">
                      measure 3
                    </label>
                    <input
                      value={strMeasure3}
                      name="strMeasure3"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.strIngredient4 ? (
                  <div className="mt-4">
                    <label htmlFor="strIngredient4" className="form-label small">
                      ingredient4
                    </label>
                    <input
                      value={strIngredient4}
                      name="strIngredient4"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.strMeasure4 ? (
                  <div className="mt-4">
                    <label htmlFor="strMeasure4" className="form-label small">
                      measure 4
                    </label>
                    <input
                      value={strMeasure4}
                      name="strMeasure4"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.strIngredient5 ? (
                  <div className="mt-4">
                    <label htmlFor="strIngredient5" className="form-label small">
                      ingredient5
                    </label>
                    <input
                      value={strIngredient5}
                      name="strIngredient5"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.strMeasure5 ? (
                  <div className="mt-4">
                    <label htmlFor="strMeasure1" className="form-label small">
                      measure 5
                    </label>
                    <input
                      value={strMeasure5}
                      name="strMeasure5"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.strIngredient6 ? (
                  <div className="mt-4">
                    <label htmlFor="strIngredient6" className="form-label small">
                      ingredient6
                    </label>
                    <input
                      value={strIngredient6}
                      name="strIngredient6"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.strMeasure6 ? (
                  <div className="mt-4">
                    <label htmlFor="strMeasure1" className="form-label small">
                      measure 6
                    </label>
                    <input
                      value={strMeasure6}
                      name="strMeasure6"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.strIngredient7 ? (
                  <div className="mt-4">
                    <label htmlFor="strIngredient1" className="form-label small">
                      ingredient7
                    </label>
                    <input
                      value={strIngredient7}
                      name="strIngredient7"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.strMeasure7 ? (
                  <div className="mt-4">
                    <label htmlFor="strMeasure7" className="form-label small">
                      measure 7
                    </label>
                    <input
                      value={strMeasure7}
                      name="strMeasure7"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.strIngredient8 ? (
                  <div className="mt-4">
                    <label htmlFor="strIngredient8" className="form-label small">
                      ingredient8
                    </label>
                    <input
                      value={strIngredient8}
                      name="strIngredient8"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.strMeasure8 ? (
                  <div className="mt-4">
                    <label htmlFor="strMeasure8" className="form-label small">
                      measure 8
                    </label>
                    <input
                      value={strMeasure8}
                      name="strMeasure8"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.strIngredient9 ? (
                  <div className="mt-4">
                    <label htmlFor="strIngredient9" className="form-label small">
                      ingredient9
                    </label>
                    <input
                      value={strIngredient9}
                      name="strIngredient9"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.strMeasure9 ? (
                  <div className="mt-4">
                    <label htmlFor="strMeasure9" className="form-label small">
                      measure 9
                    </label>
                    <input
                      value={strMeasure9}
                      name="strMeasure9"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.strIngredient10 ? (
                  <div className="mt-4">
                    <label htmlFor="strIngredient10" className="form-label small">
                      ingredient10
                    </label>
                    <input
                      value={strIngredient10}
                      name="strIngredient10"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.strMeasure10 ? (
                  <div className="mt-4">
                    <label htmlFor="strMeasure10" className="form-label small">
                      measure 10
                    </label>
                    <input
                      value={strMeasure10}
                      name="strMeasure10"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.strIngredient11 ? (
                  <div className="mt-4">
                    <label htmlFor="strIngredient11" className="form-label small">
                      ingredient11
                    </label>
                    <input
                      value={strIngredient11}
                      name="strIngredient11"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.strMeasure11 ? (
                  <div className="mt-4">
                    <label htmlFor="strMeasure11" className="form-label small">
                      measure 11
                    </label>
                    <input
                      value={strMeasure11}
                      name="strMeasure11"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.strIngredient12 ? (
                  <div className="mt-4">
                    <label htmlFor="strIngredient12" className="form-label small">
                      ingredient12
                    </label>
                    <input
                      value={strIngredient12}
                      name="strIngredient12"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.strMeasure12 ? (
                  <div className="mt-4">
                    <label htmlFor="strMeasure12" className="form-label small">
                      measure 12
                    </label>
                    <input
                      value={strMeasure12}
                      name="strMeasure12"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.strIngredient13 ? (
                  <div className="mt-4">
                    <label
                      htmlFor="strIngredient13xw"
                      className="form-label small"
                    >
                      ingredient13
                    </label>
                    <input
                      value={strIngredient13}
                      name="strIngredient13"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.strMeasure13 ? (
                  <div className="mt-4">
                    <label htmlFor="strMeasure13" className="form-label small">
                      measure 13
                    </label>
                    <input
                      value={strMeasure13}
                      name="strMeasure13"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.strIngredient14 ? (
                  <div className="mt-4">
                    <label htmlFor="strIngredient14" className="form-label small">
                      ingredient14
                    </label>
                    <input
                      value={strIngredient14}
                      name="strIngredient14"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.strMeasure14 ? (
                  <div className="mt-4">
                    <label htmlFor="strMeasure14" className="form-label small">
                      measure 14
                    </label>
                    <input
                      value={strMeasure14}
                      name="strMeasure14"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.strIngredient15 ? (
                  <div className="mt-4">
                    <label htmlFor="strIngredient15" className="form-label small">
                      ingredient15
                    </label>
                    <input
                      value={strIngredient15}
                      name="strIngredient15"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                {drink.strMeasure15 ? (
                  <div className="mt-4">
                    <label htmlFor="strMeasure15" className="form-label small">
                      measure 15
                    </label>
                    <input
                      value={strMeasure15}
                      name="strMeasure15"
                      type="text"
                      className="form-control"
                      onChange={onChange}
                    ></input>
                  </div>
                ) : null}
                <div className="mt-4">
                  <label htmlFor="strInstructions" className="form-label small">
                    Directions
                  </label>
                  <textarea
                    value={strInstructions}
                    name="strInstructions"
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

const mapStateToProps = ({ auth, myDrinks }, { match }) => {
  const drink =
    myDrinks.find((drink) => drink.id === match.params.id * 1) || {};
  return {
    auth,
    drink,
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    fetchMyDrinks: (user) => dispatch(fetchMyDrinks(user)),
    updateMyDrink: (drink) => {
      dispatch(updateMyDrink(drink, history));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMyDrink);
