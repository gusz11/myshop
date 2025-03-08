import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: navy;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 60px;
`;

export const HeaderTitle = styled.h1`
  color: white;
  font: 1.6rem;
  font-weight: 500;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

interface AuthButtonProps {
  isLogged: boolean;
}
export const AuthButton = styled.button<AuthButtonProps>`
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 1rem;
  background-color: ${(props) => props.isLogged ? "red" : "green"};
  color: white;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  svg {
    font-size: 0.8rem;
  }
`;

export const CartButton = styled.button`
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 1rem;
  background-color: violet;
  color: black;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  svg {
    font-size: 0.8rem;
  }
`;

export const Offer = styled.div`
width: 100%;
background-color: violet;
height: 1.5rem;
display: flex;
justify-content: center;
`;

export const Offerh1 = styled.span `

`
