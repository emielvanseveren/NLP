import { FC, StrictMode } from 'react';
import { Router } from './router';
import { GlobalStyle } from './constants/globalstyle';
import { ThemeProvider } from 'styled-components';
import { DEFAULT } from './constants/theme';

export const App: FC = () => {
  return (
    <StrictMode>
      <ThemeProvider theme={DEFAULT}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </StrictMode>
  );
}
