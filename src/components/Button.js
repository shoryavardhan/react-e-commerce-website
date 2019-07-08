import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--a);
  border-color: ${props => (props.cart ? "var(--f)" : "var(--a)")};
  color: ${props => (props.cart ? "var(--f)" : "var(--a)")};
 
  border-radius: 0.5rem;
  padding: 0.2 rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${props => (props.cart ? "var(--f)" : "var(--a)")};
    color: ${props => (props.cart ? "var(--a)" : "var(--b)")};
  }
  &:focus {
    outline: none;
  }
`;
