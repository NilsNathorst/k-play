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
  .categories-container  {
    display: flex;
    left: -15px;
  }
  ${props =>
    props.secondary &&
    `
    justify-content: flex-end;
    .text-wrapper {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      
    }
    .categories-container {
      flex-direction: column;
      
    margin: 20vh 0 42vh 0;
    
  .primary-cta {
    margin-top: 12px;
    
  }
  .primary-cta:after {
    background-color: white;
  }

`}
`;

const CategoriesContainer = props => {
  return (
    <Container secondary={props.secondary}>
      <div className="categories-container">
        {categories.map((category, i) => (
          <Link key={i} to={`/selectedcontent/${category}`}>
            <div className="text-wrapper">
              <p className="primary-cta">{category}</p>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default CategoriesContainer;
