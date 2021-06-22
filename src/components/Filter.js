import React, { useState } from "react";
import "../styles/Filter.scss";

const Filter = ({ handleFilter }) => {
  const [keyword, setKeyword] = useState("");

  const handleInput = (e) => {
    const keyword = e.target.value;
    setKeyword(keyword);
    if(keyword.length > 3) handleFilter(keyword);
    else handleFilter("");
  };

  return (
    <div className="filter">
      <span className="filter__title">Filter</span>
      <input
        type="text"
        name="filter"
        onChange={handleInput}
        className="filter__input"
        value={keyword}
      ></input>
    </div>
  );
};

export default Filter;
