import React from "react";
import { data } from "../data";
import { Link, useParams } from "react-router-dom";

const Content = () => {
  const parametre = useParams();
  const params = parametre.newsId;
  return (
    <div className="news">
      <h3>News#{data[params - 1].id}</h3>
      <h2>{data[params - 1].header}</h2>
      <p>{data[params - 1].text}</p>
      <Link to="/news">Back to News</Link>
    </div>
   
  );
};

export default Content;
