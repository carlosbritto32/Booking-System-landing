import React from "react";
import "../style/SearchBar.css";

const SearchBar = () => {
  return (
    <React.Fragment>
      <form className="search__container">
        <div className="search_location">
          <label>Location</label>
          <input type="text" placeholder="Where're you going?" />
        </div>
        <div className="search_arrivalDepartures">
          <label>Arrival</label>
          <input type="text" placeholder="Add dates" />
        </div>
        <div className="search_arrivalDepartures">
          <label>Departure</label>
          <input type="text" placeholder="Add dates" />
        </div>
        <div className="search_Guests">
          <label>Guests</label>
          <input type="text" placeholder="How Many?" />
        </div>
        <button>+</button>
      </form>
    </React.Fragment>
  );
};

export { SearchBar };
