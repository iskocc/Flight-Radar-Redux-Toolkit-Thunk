import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { isLoading, error, flights } = useSelector((store) => store.flight);
  return (
    <header>
      <Link to="/">
        <img
          src="https://cdn.pixabay.com/photo/2023/01/15/04/21/airplane-7719425_640.png"
          alt="logo"
        />
        <h2>Flight Radar</h2>
      </Link>
      <h3>
        {isLoading ? (
          "Loading Flights"
        ) : error ? (
          "Error: " + error
        ) : (
          <div>
            <span> {flights.length} </span>Uçuş Bulundu
          </div>
        )}
      </h3>
    </header>
  );
};

export default Header;
