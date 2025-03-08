import styled from "styled-components"

export const Card = styled.article`
background-color: white;
max-width: 350px;
width: 100%;
padding: 2rem;
margin: 0 auto;
box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;

display: flex;
flex-direction: column;
align-items: center;

`;

export const ProductImage = styled.img`
width: 250px;
height: 310px;

object-fit: contain; // muito útil
`;

export const ProductTitle = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;

  min-height: 3rem;
  margin-top: 1rem;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

export const ReviewPriceContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
margin-top: 1rem;
`;

export const Review = styled.span`
display: flex;
font-size: 0.7rem;

svg {
  font-size: 1rem;
}

`;

export const Price = styled.strong``;

export const AddToCartButtonWrapper = styled.div `
display: flex;
justify-content: center;
margin-top: 1rem;
width: 90%;
align-items: center;
`;

export const AddToCartButton = styled.button`
  border: none;
  border-radius: 5px;
  height: 40px;
  width: 90%;
  background-color: blue;
  color: white;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  svg {
    font-size: 0.8rem;
  }
`;

export const RemoveFromCartButton = styled.button `
  border: none;
  border-radius: 5px;
  height: 40px;
  width: 90%;
  background-color: violet;
  color: black;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  svg {
    font-size: 0.8rem;
  }
`;