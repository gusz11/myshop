import { useDispatch, useSelector } from 'react-redux';
import * as S from './styles';
import { RootReducer } from '../../redux/root-reducer';
import { RiDeleteBin5Line } from "react-icons/ri";
import { buyProduct, removeProduct } from '../../redux/Cart/cart-slice';
import { IoIosClose } from "react-icons/io";

interface CartProps {
    showCart: boolean;
    setShowCart: (show: boolean) => void;
}

export const Cart: React.FC<CartProps> = ({ showCart, setShowCart }) => {
    const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer);
    const dispatch = useDispatch();

    const total = cart.reduce((totalCart, product) => {
        return parseFloat((totalCart + product.price).toFixed(2));
    }, 0);

    function handleBuyCart() {
        dispatch(buyProduct());
    }

    return (
        <S.Container showCart={showCart}>
            <S.CartHeader>
                <S.Title>Carrinho</S.Title>
                <IoIosClose onClick={() => setShowCart(!showCart)}>Fechar</IoIosClose>
            </S.CartHeader>

            <S.CartProductsList>
                {cart.map(product => (
                    <S.CartProductItem key={product.id}>
                        <div className="image-container">
                            <S.Image src={product.image} alt={product.title} />
                        </div>
                        <div className="info-container">
                            <S.ProductInfo>
                                <S.ProductTitle>{product.title}</S.ProductTitle>
                                <S.ProductPrice>- ${product.price}</S.ProductPrice>
                            </S.ProductInfo>
                        </div>
                        <S.DeleteButton>
                            <RiDeleteBin5Line
                                onClick={() => dispatch(removeProduct(product))}
                            />
                        </S.DeleteButton>
                    </S.CartProductItem>
                ))}
            </S.CartProductsList>

            <S.CartFooter>
                <S.CartTotal>Total: ${total}</S.CartTotal>
                <S.BuyButton onClick={handleBuyCart}>Efetuar Compra</S.BuyButton>
            </S.CartFooter>
        </S.Container>
    );
};