import styled from 'styled-components';

export const Card = styled.article`
  background: var(--color-card);
  border-radius: var(--radius-lg);
  padding: 1.25rem;
  display: flex;  
  flex-direction: column;
  gap: 1rem;
  border: 1px solid var(--color-border);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
    border-color: var(--color-accent);
  }

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background: linear-gradient(135deg, var(--color-bg-secondary) 0%, var(--color-bg) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
`;

export const Info = styled.div`
  flex: 1;
  min-width: 0;
`;

export const Name = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.25rem;
  line-height: 1.3;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const Description = styled.p`
  font-size: 0.875rem;
  color: var(--color-text-muted);
  line-height: 1.5;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: auto;
  padding-top: 0.5rem;
  border-top: 1px solid var(--color-border);
`;

export const Price = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -0.02em;

  &::after {
    content: ' ₽';
    font-weight: 500;
    opacity: 0.8;
  }
`;

export const AddButton = styled.button`
  background: var(--color-accent);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.625rem 1.25rem;
  border-radius: var(--radius-sm);
  transition: background 0.2s ease, transform 0.1s ease;

  &:hover {
    background: var(--color-accent-hover);
  }

  &:active {
    transform: scale(0.97);
  }
`;
