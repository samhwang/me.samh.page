import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

function renderRoot() {
  const RootComponent = (
    <StrictMode>
      <App />
    </StrictMode>
  );

  const rootElement = document.getElementById('root') as HTMLElement;
  const root = createRoot(rootElement);
  root.render(RootComponent);
}

renderRoot();
