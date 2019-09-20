import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { label: "dans", name: "Dans" },
  {
    label: "teater",
    name: "Teater"
  },
  { label: "film", name: "Film" },
  { label: "all", name: "Alla videor" }
];

const CategoriesContainer = props => {
  return (
    <>
      {categories.map((category, i) => (
        <Link key={i} to={`/selectedcontent/${category.label}`}>
          <p>{category.name}</p>
        </Link>
      ))}
    </>
  );
};

export default CategoriesContainer;
