import React from "react";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <>
      <h3>Daily News</h3>
      <ul>
        <li>
          <Link to="1">
            <b>
              NEWS#1 - Hard-right House Republicans are against Ukraine aid –
              and they seem to be in charge
            </b>
          </Link>
          <br />
          <Link to="2">
            <b>
              NEWS#2 - France and South Africa prepare to collide in Rugby World
              Cup quarter-final
            </b>
          </Link>
          <br />
          <Link to="3">
            <b>
              NEWS#3 - Voting opens for Polish elections as PiS hopes to win
              third term
            </b>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default News;
