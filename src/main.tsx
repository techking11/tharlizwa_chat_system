// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store.ts';

const queryClient = new QueryClient();
const root = createRoot(document.getElementById('root')!);

root.render(
  // <StrictMode>
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>
  // </StrictMode>
);
