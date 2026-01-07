import * as S from './styles';
import type { LayoutProps } from './types';

export const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Container>
      <S.Header>
        <S.HeaderContent>
          <S.Logo>
            <S.LogoIcon>✈️</S.LogoIcon>
            <S.LogoText>Дополнительные услуги</S.LogoText>
          </S.Logo>
        </S.HeaderContent>
      </S.Header>
      <S.Main>{children}</S.Main>
    </S.Container>
  );
};
