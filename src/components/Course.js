import styled from "styled-components";
import React from "react";
import ArrowIcon from "../assets/icons/ArrowIcon";

const Container = styled.div`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colorPrimary};
  height: 34vh;
  margin: ${({ theme }) => theme.padding2};
  margin-top: 76px;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  .course-cta {
    display: flex;
    align-self: flex-end;
    bottom: 18px;
    position: absolute;
    justify-content: center;
    align-content: center;
    p {
      opacity: 1;
    }
    p,
    svg {
      margin-right: 7px;
      margin-top: auto;
      margin-bottom: auto;
    }
  }
`;

const Course = props => {
  return (
    <Container>
      <h1>Kurs:</h1>
      <h1>Art & Business</h1>
      <div className="course-cta">
        <a href="https://www.kulturakademin.com/kurskatalog/art-business">
          <p className="card-title">Låter intressant!</p>
        </a>
        <ArrowIcon facingRight />
      </div>
    </Container>
  );
};

export default Course;
