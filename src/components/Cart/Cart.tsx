import { useCart } from '../../context/CartContext';
import * as S from './styles';

export const Cart = () => {
  const { cart, total, addToCart, removeFromCart, clearCart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    alert('Заказ оформлен! Спасибо за покупку.');
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          Итого
          {totalItems > 0 && <S.ItemCount>{totalItems}</S.ItemCount>}
        </S.Title>
      </S.Header>

      {cart.length === 0 ? (
        <S.EmptyState>Корзина пуста. Добавьте услуги из списка.</S.EmptyState>
      ) : (
        <>
          <S.Content>
            {cart.map((item) => (
              <S.Item key={item.service.id}>
                {item.service.icon && <S.ItemIcon>{item.service.icon}</S.ItemIcon>}
                <S.ItemInfo>
                  <S.ItemName>{item.service.name}</S.ItemName>
                  <S.ItemPrice>{item.service.price.toLocaleString('ru-RU')} ₽</S.ItemPrice>
                </S.ItemInfo>
                <S.ItemQuantity>
                  <S.QuantityButton onClick={() => removeFromCart(item.service.id)}>
                    -
                  </S.QuantityButton>
                  <S.QuantityValue>{item.quantity}</S.QuantityValue>
                  <S.QuantityButton onClick={() => addToCart(item.service)}>+</S.QuantityButton>
                </S.ItemQuantity>
              </S.Item>
            ))}
          </S.Content>

          <S.Footer>
            <S.TotalRow>
              <S.TotalLabel>Сумма заказа</S.TotalLabel>
              <S.TotalValue>{total.toLocaleString('ru-RU')}</S.TotalValue>
            </S.TotalRow>
            <S.CheckoutButton onClick={handleCheckout}>Оформить заказ</S.CheckoutButton>
            <S.ClearButton onClick={clearCart}>Очистить корзину</S.ClearButton>
          </S.Footer>
        </>
      )}
    </S.Container>
  );
};
