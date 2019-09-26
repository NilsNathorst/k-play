import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchIcon from "../assets/icons/SearchIcon";
const Container = styled.div`
  margin: ${({ theme }) => theme.padding2};
  height: 40px;
  border: solid 2px white;
  display: flex;
  align-items: center;
  padding-left: 10px;
  svg {
    position: absolute;
    right: 12px;
  }
  input::placeholder {
    text-align: center;
  }
`;
const StyledInput = styled.input`
  height: 100%;
  width: 100%;
  padding: 0;
  background: none;
  color: ${({ theme }) => theme.colorLight};
  border: none;
  outline: none;
`;

const SearchFilter = props => {
  const [query, setQuery] = useState("");
  const [isFocused, setFocused] = useState(false);
  useEffect(() => {
    setQuery(props.query);
  }, [props.onChange]);

  return (
    <Container>
      {!isFocused && <SearchIcon />}
      <StyledInput
        value={query}
        placeholder="Sök på person, yrke, branch eller ämne"
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setQuery("");
          setFocused(false);
        }}
        onChange={props.onChange}
      />
    </Container>
  );
};

export default SearchFilter;
