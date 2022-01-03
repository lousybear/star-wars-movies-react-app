import React from "react";

export default function Header() {
  return (
    <div className="topnav">
      <a className="logo" href="/">
        Star Wars
      </a>
      <div className="search-container">
        <form>
          <a href="/">Add Movies</a>
          <input type="text" placeholder="Search..." name="search" />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
