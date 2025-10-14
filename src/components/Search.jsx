import React, { useState } from "react";

function Search({ onSearch }) {
  const [searchedPlant, setSearchedPlant] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchedPlant(value);
    onSearch(value); // pass value up to parent
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        value={searchedPlant}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
