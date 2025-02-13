import React, { useState } from "react";
import PropTypes from "prop-types";
import getImages from "../requests/getImages";
import "../styles/Search.css";

function Search({ setSearchResults, setValidSearch, setLoading }) {
  const [value, setValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value, setValidSearch, setLoading));
  };
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        placeholder="Search NASA's image library "
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="search-input"
        data-testid="search-input"
        required="true"
      />
      <button type="submit" className="search-btn" data-testid="search-btn">
        Go!
      </button>
    </form>
  );
}

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};

export default Search;