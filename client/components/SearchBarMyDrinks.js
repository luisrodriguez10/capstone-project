import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const SearchBarMyDrinks = ({ myDrinks }) => {
  const [query, setQuery] = useState("");

  return (
    <div
      className="dropdown"
      style={{
        zIndex: "10",
      }}
    >
      <input
        type="text"
        className="form-control"
        placeholder="Search drinks by name"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div id="myDropdown" className="dropdown-content">
        {myDrinks
          .filter((myDrink) => {
            if (query === "") {
              return myDrink;
            } else if (
              myDrink.drinkName.toLowerCase().includes(query.toLowerCase())
            ) {
              return myDrink;
            }
          })
          .slice(0, 2)
          .map((myDrink) => {
            if (query !== "") {
              return (
                <Link
                  to={`/myDrinks/${myDrink.id}`}
                  key={myDrink.id}
                  style={{
                    display: "block",
                    width: "100%",
                    boxSizing: "border-box",
                    border: "1px solid black",
                    marginTop: "-1px",
                  }}
                  className="text-link p-2"
                >
                    {myDrink.drinkName}
                </Link>
              );
            }
          })}
      </div>
    </div>
  );
};

export default connect()(SearchBarMyDrinks);
