import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tags from "../data/tags";
const categories = [...new Set(tags.flat())];

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .primary-cta {
    padding: ${({ theme }) => theme.padding2};
  }
  ${props =>
    props.secondary &&
    `
    margin-top: 20vh;
      flex-direction: column;
      justify-content: flex-end;
      margin-bottom: 42vh;
      .primary-cta {
   text-align: right;
   text-decoration: underline;
   margin-top: 12px;
  }
  .primary-cta:after {
display: none;
  }
    `}
`;

const CategoriesContainer = props => {
  return (
    <Container secondary={props.secondary}>
      {categories.slice(0, 8).map((category, i) => (
        <Link key={i} to={`/selectedcontent/${category}`}>
          <p className="primary-cta">{category}</p>
        </Link>
      ))}
    </Container>
  );
};

export default CategoriesContainer;
