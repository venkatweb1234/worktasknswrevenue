// SearchInput.js
import styled from "styled-components";

export const SearchInputWrapper = styled.div`
  position: relative;
`;
export const SearchInputStyle = styled.input`
  padding: 8px 30px 8px 12px; /* Adjust padding to accommodate the icon */
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 345px;
  outline: none;

  &:hover,
  &:focus {
    border-color: #007bff;
  }
`;
export const SearchIconContainer = styled.div`
  position: absolute;
  top: 56%;
  right: 38%;
  transform: translateY(-50%);
`;
