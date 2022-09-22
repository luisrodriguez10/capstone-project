import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import  "./Mydrinks.css"

const SearchBarMyDrinks = ({ myDrinks }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="container">
      <input className="searchinput"
        type="text"
        class="form-control"
        placeholder="Search drinks by name ..." 
        className="form-control"
        placeholder="Search drinks by name"
        onChange={(e) => setQuery(e.target.value)}
      /><div></div>

      <div className="dropdown-content">
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
                <div className="dropdownlink">
                <Link
                  to={`/myDrinks/${myDrink.id}`}
                  key={myDrink.id}
                  style={{
                    display: "block",
                    width: "62.7%",
                    boxSizing: "border-box",
                    border: "1px solid black",
                    marginTop: "-1px",
                    textAlign:"center",
                    padding: "5px",
                    position: "relative",
                    left: "180px", 
                    color: "black"
                  }}
                  className="text-link p-2"
                >
                    {myDrink.drinkName}
                </Link>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default connect()(SearchBarMyDrinks);
