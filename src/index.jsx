import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';
import { theme } from 'styles/theme';
import App from './App';
import { GlobalStyle } from './styles/global-styles';
import store from 'store';
import { QueryClient } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
          <ReactQueryDevtools />
        </ThemeProvider>
      </ReduxProvider>
    </QueryClientProvider>
  // </React.StrictMode>
);
