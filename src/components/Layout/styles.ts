import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  background: var(--color-bg-secondary);
  border-bottom: 1px solid var(--color-border);
  padding: 1rem 1.5rem;
  position: sticky;
  top: 0;
  z-index: 100;

  @media (min-width: 768px) {
    padding: 1.25rem 2rem;
  }
`;

export const HeaderContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LogoIcon = styled.span`
  font-size: 1.75rem;
`;

export const LogoText = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Main = styled.main`
  flex: 1;
  padding: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const ServicesSection = styled.section`
  flex: 1;
  min-width: 0;
`;

export const CartSection = styled.aside`
  width: 100%;

  @media (min-width: 1024px) {
    width: 380px;
    flex-shrink: 0;
    position: sticky;
    top: 100px;
  }
`;
