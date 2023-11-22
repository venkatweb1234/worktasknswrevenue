import { styled } from "styled-components";

export const LoginStyles = styled.div`
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
  font-family: "Comfortaa", cursive;
`;
export const FormStyles = styled.div`
  position: relative;
  z-index: 1;
  background: #ffffff;
  border-radius: 10px;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
`;
export const NormalFormStyles = styled.form``;
export const FormInput = styled.input`
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  border-radius: 5px;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
  font-family: "Comfortaa", cursive;
  &:focus {
    background: #dbdbdb;
  }
  &:active {
    background: #395591;
  }
`;

export const FromButton = styled.button`
  font-family: "Comfortaa", cursive;
  text-transform: uppercase;
  outline: 0;
  background: #4b6cb7;
  width: 100%;
  border: 0;
  border-radius: 5px;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
`;

export const SpanStyles = styled.span`
  font-size: 40px;
  color: #4b6cb7;
  margin-bottom: 25px;
  display: block;
`;

export const EmptyDiv = styled.div``;
