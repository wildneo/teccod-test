import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-bg: #0A1628;
    --color-bg-secondary: #132035;
    --color-accent: #FF6B35;
    --color-accent-hover: #FF8555;
    --color-text: #F0F4F8;
    --color-text-muted: #8BA3C7;
    --color-border: #1E3A5F;
    --color-success: #4ADE80;
    --color-card: #162942;
    --font-family: 'DM Sans', system-ui, -apple-system, sans-serif;
    --shadow-card: 0 4px 24px rgba(0, 0, 0, 0.3);
    --shadow-hover: 0 8px 32px rgba(255, 107, 53, 0.2);
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: var(--font-family);
    background: var(--color-bg);
    color: var(--color-text);
    min-height: 100vh;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    min-height: 100vh;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
  }

  button:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
`;
