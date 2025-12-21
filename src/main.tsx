import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App/app.tsx';

import './styles/reset.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
