import { ServiceCard } from '../ServiceCard';
import * as S from './styles';
import type { ServiceListProps } from './types';

export const ServiceList = ({ services }: ServiceListProps) => {
  if (services.length === 0) {
    return (
      <S.Container>
        <S.Title>Доступные услуги</S.Title>
        <S.EmptyState>Услуги не найдены</S.EmptyState>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Title>Доступные услуги</S.Title>
      <S.Grid>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </S.Grid>
    </S.Container>
  );
};
