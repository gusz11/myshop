import styled from "styled-components";

interface ContainerProps {
    showCart: boolean;
}

export const Container = styled.aside<ContainerProps>`
    position: fixed;
    top: 0;
    right: ${(props) => (props.showCart ? "0" : "-350px")};
    width: 350px;
    height: 100vh;
    background-color: white;
    padding: 2rem;
    box-shadow: -3px 0 15px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    z-index: 5;
    transition: right 0.5s;
`;

export const Title = styled.h1``;

export const CartProductsList = styled.ul`
    padding: 2rem 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    overflow-y: auto;
    max-height: calc(100vh - 200px);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

export const CartProductItem = styled.li`
    display: flex;
    align-items: center;
    padding: 0.5rem 0;

    /* Definir larguras relativas para evitar compressão */
    .image-container {
        flex: 0 0 60px; /* Largura fixa para a imagem */
        margin-right: 1rem;
    }

    .info-container {
        flex: 1; /* O texto ocupa o espaço restante */
        margin-right: 1rem;
    }
`;

export const Image = styled.img`
    width: 60px;
    height: 60px;
    object-fit: contain;
    border-radius: 5px;
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;

export const ProductTitle = styled.strong`
    font-size: 1rem;
    color: #000;
`;

export const ProductPrice = styled.span`
    font-size: 0.9rem;
    color: #666;
`;

export const DeleteButton = styled.div`
    flex: 0 0 auto; 
    svg {
        font-size: 1.5rem; 
        color: #666;
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
            color: #ff4444;
        }
    }
`;

export const CartTotal = styled.strong`
    margin-top: 1rem;
    display: block;
    font-size: 1.2rem;
    text-align: right;
`;

export const CartFooter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #ddd;
`;

export const CartHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;

    svg {
        font-size: 2.5rem;
        transition: 0.3s;
    }

    svg:hover {
        transform: translateY(-2px);
        transition: 0.3s;
    }
`;

export const CloseButton = styled.button``;

export const BuyButton = styled.button`
    border: none;
    border-radius: 5px;
    height: 40px;
    width: 100%;
    background-color: blue;
    color: white;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    cursor: pointer;
`;