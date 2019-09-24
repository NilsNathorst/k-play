import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 200px;
  height: 20px;
`;

const SearchFilter = props => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuery(props.query);
  }, [props.onChange]);

  return (
    <>
      <StyledInput onChange={props.onChange} />
    </>
  );
};

export default SearchFilter;
