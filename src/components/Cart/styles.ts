import styled from 'styled-components';

export const Container = styled.div`
  background: var(--color-card);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  overflow: hidden;
`;

export const Header = styled.div`
  background: var(--color-bg-secondary);
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--color-border);
`;

export const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '🛒';
  }
`;

export const ItemCount = styled.span`
  background: var(--color-accent);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.125rem 0.5rem;
  border-radius: 999px;
  margin-left: auto;
`;

export const Content = styled.div`
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-height: 300px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: var(--color-bg);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-border);
    border-radius: 3px;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 2rem 1rem;
  color: var(--color-text-muted);
  font-size: 0.9375rem;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: var(--color-bg-secondary);
  border-radius: var(--radius-md);
`;

export const ItemIcon = styled.span`
  font-size: 1.25rem;
`;

export const ItemInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ItemName = styled.span`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemPrice = styled.span`
  display: block;
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  margin-top: 0.125rem;
`;

export const ItemQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const QuantityButton = styled.button`
  width: 28px;
  height: 28px;
  border-radius: var(--radius-sm);
  background: var(--color-bg);
  color: var(--color-text);
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s ease;

  &:hover {
    background: var(--color-border);
  }
`;

export const QuantityValue = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text);
  min-width: 1.5rem;
  text-align: center;
`;

export const Footer = styled.div`
  padding: 1rem 1.25rem;
  border-top: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TotalLabel = styled.span`
  font-size: 1rem;
  color: var(--color-text-muted);
`;

export const TotalValue = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -0.02em;

  &::after {
    content: ' ₽';
    font-weight: 500;
    font-size: 1.125rem;
    opacity: 0.8;
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;
  background: var(--color-accent);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.875rem 1.5rem;
  border-radius: var(--radius-md);
  transition: background 0.2s ease, transform 0.1s ease;

  &:hover:not(:disabled) {
    background: var(--color-accent-hover);
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ClearButton = styled.button`
  width: 100%;
  background: transparent;
  color: var(--color-text-muted);
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem;
  border-radius: var(--radius-sm);
  transition: color 0.15s ease;

  &:hover {
    color: var(--color-text);
  }
`;
