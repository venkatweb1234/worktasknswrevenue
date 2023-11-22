import styled from "styled-components";
export const FlexContainer = styled.div`
  display: flex;
  background-color: #1e90ff;
  flex-flow: row wrap;
  justify-content: space-around;
  height: 50%;
  & > div {
    background-color: #f1f1f1;
    padding: 20px;
    margin: 10px;
    font-size: 15px;
    width: 200px;
    height: 350px;
  }
`;

export const MainDiv = styled.div`
  justify-content: center;
  text-align: center;
  margin: "0 auto";
`;
export const H2 = styled.h2`
  color: #fff;
`;
export const PageNationDiv = styled.div`
  padding: 50px 0;
`;
export const Button = styled.button``;

export const SearchInputContainer = styled.div`
  text-align: center;
`;
