import styled from "@emotion/styled";

export const Button = styled.button`
margin-right:20px;
  padding: 5px 15px;
  
 
  &:not(:last-child) {
    margin-right: 10px;
  }

  :hover,
  :focus {
    background-color: lightblue;
    color: white;
    transition: all 0.2s;
  }
`;