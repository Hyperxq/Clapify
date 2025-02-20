import REACTDOM from 'react-dom/client';
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from 'react-router-dom';

const mode: string = import.meta.env.VITE_DEPLOY_TARGET ?? 'development';

const urlMap: Record<string, string> = {
  production: '/clapify/',
  cloudflare: '/',
  development: '/'
}

const basename: string = urlMap[mode];

REACTDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);
