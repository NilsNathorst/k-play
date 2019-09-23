import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const categories = [
  { label: "dans", name: "Dans" },
  {
    label: "teater",
    name: "Teater"
  },
  { label: "film", name: "Film" },
  { label: "all", name: "Alla videor" }
];

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const CategoriesContainer = props => {
  return (
    <Container>
      {categories.map((category, i) => (
        <Link key={i} to={`/selectedcontent/${category.label}`}>
          <p>{category.name}</p>
        </Link>
      ))}
    </Container>
  );
};

export default CategoriesContainer;
