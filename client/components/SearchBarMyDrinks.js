import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import  "./Mydrinks.css"

const SearchBarMyDrinks = ({ myDrinks }) => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <input
        type="text"

        className="form-control"
        placeholder="Search drinks by name ..." 



        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="dropdown-content">
        {myDrinks
          .filter((myDrink) => {
            if (query === "") {
              return myDrink;
            } else if (
              myDrink.strDrink.toLowerCase().includes(query.toLowerCase())
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
                    width: "100%",
                    boxSizing: "border-box",
                    // border: "1.5px solid black",
                    borderRadius:"30px",
                    marginTop: "-1px",
                    textAlign:"left",
                    padding: "10px",
                    position: "relative",
                    right: "0px", 
                    color: "black"
                  }}
                  className="text-link p-2"
                >
                    {myDrink.strDrink}
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
