import React from "react";

const Search = props => {
  return (
    <div className="searchClass">
      <input
        className="search__input"
        type="search"
        placeholder={props.Placeholder}
        onChange={props.SearchProps}
      />
    </div>
  );
};
export default Search;
