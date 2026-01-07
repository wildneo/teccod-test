import { useCart } from '../../context/CartContext';
import * as S from './styles';
import type { ServiceCardProps } from './types';

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(service);
  };

  return (
    <S.Card>
      <S.Header>
        {service.icon && <S.IconWrapper>{service.icon}</S.IconWrapper>}
        <S.Info>
          <S.Name>{service.name}</S.Name>
          {service.description && <S.Description>{service.description}</S.Description>}
        </S.Info>
      </S.Header>
      <S.Footer>
        <S.Price>{service.price.toLocaleString('ru-RU')}</S.Price>
        <S.AddButton onClick={handleAdd}>Добавить</S.AddButton>
      </S.Footer>
    </S.Card>
  );
};
